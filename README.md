# CSC4107 High Performance Computing · Lecture Notes

Personal lecture notes for **CSC4107 High Performance Computing** (CUHK-Shenzhen, Fall 2026).

Read online: **https://olga0107.github.io/hpc-csc4107-notes/**

Style: English headings with Chinese explanations; technical terms and code stay in English. Each note follows the lecture's own logic. Sections open with the core question being solved, derivations are worked out step by step (transfer counts, miss rates, execution time), and notes end with self-check questions for active recall. Key slides are extracted as images under `assets/slides/`, with additional self-made diagrams under `assets/<lecture>/`.

## Index

| # | Topic | Note |
|---|-------|------|
| 1 | Principle of locality, memory hierarchy, data movement bottleneck, matrix multiply v0 → v1 | [lec01-intro-and-locality](notes/lec01-intro-and-locality.md) |
| 2 | Register reuse (2×2 tiling, 12 → 8 registers), cache line, hit/miss, miss-rate math | [lec02-register-and-cache](notes/lec02-register-and-cache.md) |

## Reference books

- *Parallel Programming in C with MPI and OpenMP* — Michael J. Quinn
- *Computer Systems: A Programmer's Perspective* — Bryant & O'Hallaron
