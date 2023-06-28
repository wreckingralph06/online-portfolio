import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleOptions from "./particleOptions/HollowKnightParticle"; 

export default function Particle() {
    const particlesInit = async (main) => {
        await loadFull(main);
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={particleOptions}
        />
    )
}