import React, {useEffect, useRef} from "react";
import {Outline} from '@react-three/postprocessing'
import {BlendFunction, Resizer, KernelSize} from 'postprocessing'
import {useGLTF} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";

function Model(props) {
    const {
        setNodes = Function.prototype,
        showAlert = Function.prototype,
        alertNode = {}
    } = props

    const group = useRef();
    const {nodes, materials} = useGLTF("/virtual-stand/pac10.glb");

    useEffect(() => {
        setNodes(group.current.children);
    }, [])

    function moveOnNode(e) {
        e.stopPropagation();
        document.querySelector('body').style.cursor = "pointer";
        e.eventObject.material = e.eventObject.material.clone();
        e.eventObject.material.color.set(0xf34f3f);
    }

    function leaveOnNode(e) {
        e.stopPropagation();
        document.querySelector('body').style.cursor = "default";

        if (alertNode && (alertNode?.name === e.eventObject.name)) return;

        e.eventObject.material = e.eventObject.material.clone();
        e.eventObject.material.color.set(0xffffff);
    }

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                name="bak"
                castShadow
                receiveShadow
                geometry={nodes.bak.geometry}
                material={nodes.bak.material}
                position={[-0.02112514, 0.10767657, -0.18515362]}
                rotation={[Math.PI / 2, 0, 2.61799382]}
                userData={{name: "bak", defaultColor: {r:0.3813, g:0.3864, b:0.361}}}
                onPointerMove={moveOnNode}
                onPointerLeave={leaveOnNode}
                onClick={showAlert}
            />
            <mesh
                name="regulyatorDav"
                castShadow
                receiveShadow
                geometry={nodes.regulyatorDav.geometry}
                material={nodes.regulyatorDav.material}
                position={[-0.07846048, 0.11741482, -0.25003713]}
                rotation={[Math.PI / 2, 0, 2.61799382]}
                userData={{name: "regulyatorDav" ,defaultColor: {r:0.3813, g:0.3864, b:0.361}}}
                onPointerMove={moveOnNode}
                onPointerLeave={leaveOnNode}
                onClick={showAlert}
            />
            <mesh
                name="nasosKons"
                castShadow
                receiveShadow
                geometry={nodes.nasosKons.geometry}
                material={nodes.nasosKons.material}
                position={[-0.17763758, -0.07313324, -0.2636776]}
                rotation={[Math.PI / 2, 0, 2.61799382]}
                userData={{name: "nasosKons", defaultColor: {r:0.3813, g:0.3864, b:0.361}}}
                onPointerMove={moveOnNode}
                onPointerLeave={leaveOnNode}
                onClick={showAlert}
            />
            <mesh
                name="KranHarovoiA"
                castShadow
                receiveShadow
                geometry={nodes.KranHarovoiA.geometry}
                material={nodes.KranHarovoiA.material}
                position={[-0.07851833, 0.0067561, -0.24896501]}
                rotation={[Math.PI / 2, 0, 2.61799382]}
                userData={{name: "KranHarovoiA", defaultColor: {r:0.3813, g:0.3864, b:0.361}}}
                onPointerMove={moveOnNode}
                onPointerLeave={leaveOnNode}
                onClick={showAlert}
            />
            <mesh
                name="opresovatNasos"
                castShadow
                receiveShadow
                geometry={nodes.opresovatNasos.geometry}
                material={nodes.opresovatNasos.material}
                position={[-0.29550514, -0.08270947, -0.19236885]}
                rotation={[Math.PI / 2, 0, 2.61799382]}
                userData={{name: "opresovatNasos", defaultColor: {r:0.3813, g:0.3864, b:0.361}}}
                onPointerMove={moveOnNode}
                onPointerLeave={leaveOnNode}
                onClick={showAlert}
            />
            <mesh
                name="KranHarovoiB"
                castShadow
                receiveShadow
                geometry={nodes.KranHarovoiB.geometry}
                material={nodes.KranHarovoiB.material}
                position={[0.35377052, -0.06440883, 0.40760911]}
                rotation={[Math.PI / 2, 0, 2.61799382]}
                userData={{name: "KranHarovoiB", defaultColor: {r:0.3813, g:0.3864, b:0.361}}}
                onPointerMove={moveOnNode}
                onPointerLeave={leaveOnNode}
                onClick={showAlert}
            />
            <mesh
                name="pol"
                castShadow
                receiveShadow
                geometry={nodes.pol.geometry}
                material={nodes.pol.material}
                position={[0.02774103, -0.01, -0.02124031]}
                rotation={[Math.PI / 2, 0, 2.61799382]}
                userData={{name: "pol"}}
            />
            <mesh
                name="nodeid3"
                castShadow
                receiveShadow
                geometry={nodes.nodeid3.geometry}
                material={nodes.nodeid3.material}
                position={[0.02774103, -0.01, -0.02124031]}
                rotation={[Math.PI / 2, 0, 2.61799382]}
                userData={{name: "nodeid3"}}
            />
            <mesh
                name="armatura"
                castShadow
                receiveShadow
                geometry={nodes.armatura.geometry}
                material={nodes.armatura.material}
                position={[0.20144141, 0.01905002, 0.23590088]}
                rotation={[Math.PI / 2, 0, 2.61799382]}
                userData={{name: "armatura", defaultColor: {r:0.3813, g:0.3864, b:0.361}}}
                onPointerMove={moveOnNode}
                onPointerLeave={leaveOnNode}
                onClick={showAlert}
            />
            <mesh
                name="KranHarovoiС"
                castShadow
                receiveShadow
                geometry={nodes.KranHarovoiС.geometry}
                material={nodes.KranHarovoiС.material}
                position={[-0.21709174, 0.00679418, -0.08468334]}
                rotation={[Math.PI / 2, 0, 2.61799382]}
                userData={{name: "KranHarovoiС", defaultColor: {r:0.3813, g:0.3864, b:0.361}}}
                onPointerMove={moveOnNode}
                onPointerLeave={leaveOnNode}
                onClick={showAlert}
            />
        </group>
    );
}

useGLTF.preload("/virtual-stand/pac10.glb");

export default Model;
