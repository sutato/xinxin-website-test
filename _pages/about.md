---
layout: about
title: about
permalink: /
subtitle: Assistant Research Scientist · Mechanical Engineering · University of Michigan

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false

selected_papers: true
social: true

announcements:
  enabled: true
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am an Assistant Research Scientist in the Department of Mechanical Engineering at the University of Michigan–Dearborn. My research focuses on developing physics-based and AI-accelerated computational frameworks to understand and optimize advanced manufacturing processes, with an emphasis on battery electrode manufacturing and metal additive manufacturing.

My work integrates multiscale modeling, multiphysics simulations, and machine learning to establish quantitative relationships between manufacturing processes, microstructure evolution, and material performance. I have developed computational approaches spanning particle-scale interactions, continuum transport, solidification and grain evolution, and data-driven surrogate modeling.

Through collaborations with academic institutions, national laboratories, and industry partners, I aim to translate computational advances into practical solutions for manufacturing process design and optimization.

### Research highlights

- **29 peer-reviewed journal articles**, including **12 as first or co-first author** (10 first-author, 2 co-first<sup>†</sup>), plus 1 first-author ASME MSEC conference paper
- **Selected venues:** _Science Advances_<sup>†</sup>, _Advanced Energy Materials_<sup>†</sup>, _Acta Materialia_, _Energy Storage Materials_, _Advanced Science_, _Chemical Engineering Journal_
- **Collaborations:** General Motors Global R&D, Pacific Northwest National Laboratory, and the DARPA SURGE program with Texas A&M University and AlphaSTAR
- **Methods:** phase-field, CALPHAD, crystal plasticity, CFD–DEM, coarse-grained molecular dynamics, and Gaussian-process surrogate modeling with uncertainty quantification

<small><sup>†</sup> Equal contribution (co-first author).</small>

### Research projects

My work connects **manufacturing process → microstructure → material performance**, so that process settings can be chosen from physics rather than trial and error.

**Battery electrode manufacturing** — _drying, multiscale modeling, and process optimization under industrial conditions_<br>
Drying conditions decide whether an electrode ends up with uniform binder distribution or with binder gradients, cracking, and debonding. I build multiscale models, from coarse-grained molecular dynamics of particles and binder up to continuum heat and mass transport, that predict how roll-to-roll and laser-assisted drying shape the final 3D electrode structure. These models give manufacturers a physics-based way to select drying settings and anticipate electrode quality. Conducted with General Motors Global R&D.<br>
Related projects: [electrode drying]({{ '/projects/1_project/' | relative_url }}) · [coarse-grained MD]({{ '/projects/5_project/' | relative_url }}) · [solid-state batteries]({{ '/projects/3_project/' | relative_url }})

**Metal additive manufacturing** — _solidification, grain selection, phase-field simulation, and ML acceleration_<br>
Grain structure controls the strength and anisotropy of printed metal parts, but predicting it is computationally expensive. I couple CALPHAD thermodynamics, phase-field solidification, and Gaussian-process surrogates to predict grain selection and the columnar-to-equiaxed transition in laser powder bed fusion, reducing expensive thermodynamic evaluations by roughly two orders of magnitude while preserving the key solidification physics. This builds on the CFD–DEM powder-flow and laser–particle interaction models from my doctoral work. DARPA SURGE collaboration with Texas A&M University and AlphaSTAR.<br>
Related projects: [ML-accelerated grain prediction]({{ '/projects/2_project/' | relative_url }}) · [powder flow and thermal modeling]({{ '/projects/6_project/' | relative_url }})

**Computational framework development** — _multiphysics, physics-informed AI, and high-performance computing_<br>
Across both areas I develop simulation frameworks that can be reused for new materials and processes: coupled FFT crystal-plasticity and phase-field solvers for recrystallization, electro-chemo-mechanical models for solid-state batteries, large-scale phase-field simulation for pouch-cell pressure optimization, and machine-learning surrogates that turn expensive simulations into fast design tools. Tools: Fortran, Python, MATLAB, LAMMPS, COMSOL, and parallel computing.<br>
Related projects: [crystal plasticity + phase field]({{ '/projects/4_project/' | relative_url }}) · [solid-state battery multiphysics]({{ '/projects/3_project/' | relative_url }})

I am interested in research and industry opportunities involving **computational science, battery R&D, modeling & simulation, and advanced manufacturing**.
