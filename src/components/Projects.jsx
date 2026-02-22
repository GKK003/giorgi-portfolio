import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <img src={project.image} alt={project.title} />

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Live Demo
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
