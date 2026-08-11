import { AfterViewInit, Component, ElementRef, OnDestroy, signal, viewChild } from '@angular/core';
import { CompanyStat } from '../../../../core/models/home-content.model';

interface CountingStat extends CompanyStat {
  targetNumber: number;
  suffix: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent implements AfterViewInit, OnDestroy {
  private sectionRef = viewChild.required<ElementRef<HTMLElement>>('sectionRef');
  private observer?: IntersectionObserver;
  private hasAnimated = false;

  readonly stats: CountingStat[] = [
    { value: '15', label: 'Years of Experience', targetNumber: 15, suffix: '+' },
    { value: '500', label: 'Clients Served', targetNumber: 500, suffix: '+' },
    { value: '50', label: 'Countries Exported To', targetNumber: 50, suffix: '+' },
    { value: '1M', label: 'Bags Produced Annually', targetNumber: 1000, suffix: 'K+' },
  ];

  readonly displayValues = signal<Record<string, number | undefined>>({});

  ngAfterViewInit(): void {
    // Only animate once the section is actually visible — a subtle,
    // meaningful animation rather than counting up off-screen on load.
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateCounts();
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(this.sectionRef().nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animateCounts(): void {
    const durationMs = 1400;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

      const next: Record<string, number> = {};
      for (const stat of this.stats) {
        next[stat.label] = Math.round(stat.targetNumber * eased);
      }
      this.displayValues.set(next);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }
}
