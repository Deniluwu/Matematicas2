        // DOM Elements
        const elements = {
            // Exercise 1
            zInput: document.getElementById('z-value'),
            resetZ: document.getElementById('reset-z'),
            resultA: document.getElementById('result-a'),
            resultB: document.getElementById('result-b'),
            
            // Exercise 2
            tInput: document.getElementById('t-value'),
            resetT: document.getElementById('reset-t'),
            resultTA: document.getElementById('result-t-a'),
            resultTB: document.getElementById('result-t-b'),
            
            // Exercise 3
            xInput: document.getElementById('x-value'),
            yInput: document.getElementById('y-value'),
            resetX: document.getElementById('reset-x'),
            resetY: document.getElementById('reset-y'),
            resultXA: document.getElementById('result-x-a'),
            resultXB: document.getElementById('result-x-b'),
            
            // Exercise 4
            cInput: document.getElementById('c-value'),
            dInput: document.getElementById('d-value'),
            resetC: document.getElementById('reset-c'),
            resetD: document.getElementById('reset-d'),
            aValueDisplay: document.getElementById('a-value-display'),
            bValueDisplay: document.getElementById('b-value-display'),
            resultABCDA: document.getElementById('result-abcd-a'),
            resultABCDB: document.getElementById('result-abcd-b'),
            
            // Exercise 5
            angleInput: document.getElementById('x-angle'),
            resetAngle: document.getElementById('reset-angle'),
            trigALeft: document.getElementById('trig-a-left'),
            trigARight: document.getElementById('trig-a-right'),
            trigAVerification: document.getElementById('trig-a-verification'),
            trigBLeft: document.getElementById('trig-b-left'),
            trigBRight: document.getElementById('trig-b-right'),
            trigBVerification: document.getElementById('trig-b-verification')
        };

        // Event Listeners
        document.addEventListener('DOMContentLoaded', calculateAll);
        
        // Ejercicio 1
        elements.zInput.addEventListener('input', calculateExercise1);
        elements.resetZ.addEventListener('click', () => {
            elements.zInput.value = '4.5';
            calculateExercise1();
        });
        
        // Ejercicio 2
        elements.tInput.addEventListener('input', calculateExercise2);
        elements.resetT.addEventListener('click', () => {
            elements.tInput.value = '3.2';
            calculateExercise2();
        });
        
        // Ejercicio  3
        elements.xInput.addEventListener('input', calculateExercise3);
        elements.yInput.addEventListener('input', calculateExercise3);
        elements.resetX.addEventListener('click', () => {
            elements.xInput.value = '6.5';
            calculateExercise3();
        });
        elements.resetY.addEventListener('click', () => {
            elements.yInput.value = '3.8';
            calculateExercise3();
        });
        
        // Ejercicio 4
        elements.cInput.addEventListener('input', calculateExercise4);
        elements.dInput.addEventListener('input', calculateExercise4);
        elements.resetC.addEventListener('click', () => {
            elements.cInput.value = '4.6';
            calculateExercise4();
        });
        elements.resetD.addEventListener('click', () => {
            elements.dInput.value = '1.7';
            calculateExercise4();
        });
        
        // Ejercicio 5
        elements.angleInput.addEventListener('input', calculateExercise5);
        elements.resetAngle.addEventListener('click', () => {
            elements.angleInput.value = (Math.PI/10).toFixed(6);
            calculateExercise5();
        });

        function calculateAll() {
            calculateExercise1();
            calculateExercise2();
            calculateExercise3();
            calculateExercise4();
            calculateExercise5();
        }

        function calculateExercise1() {
            const z = parseFloat(elements.zInput.value) || 0;

            // Parte a
            const resultA = Math.pow(0.42, 4) + Math.pow(3.12, 2) - 162.32 - 80.7;
            elements.resultA.textContent = `Resultado: ${resultA.toFixed(6)}`;

            // Parte b
            const numerator = Math.pow(z, 3) - 23;
            const denominator = Math.cbrt(Math.pow(z, 2) + 17.5);
            const resultB = numerator / denominator;
            elements.resultB.textContent = `Resultado: ${resultB.toFixed(6)}`;
        }

        function calculateExercise2() {
            const t = parseFloat(elements.tInput.value) || 0;
            
            // Parte a
            const expTerm = 0.5 * Math.exp(2 * t);
            const cubicTerm = 3.8 * Math.pow(t, 3);
            const resultTA = expTerm - cubicTerm;
            elements.resultTA.textContent = `Resultado: ${resultTA.toFixed(6)}`;
            
            // Parte b
            const numeratorT = 6 * Math.pow(t, 2) + 6 * t - 2;
            const denominatorT = Math.pow(t, 2) - 1;
            const resultTB = numeratorT / denominatorT;
            elements.resultTB.textContent = `Resultado: ${resultTB.toFixed(6)}`;
        }

        function calculateExercise3() {
            const x = parseFloat(elements.xInput.value) || 0;
            const y = parseFloat(elements.yInput.value) || 0;
            
            // Parte a
            const sumOfSquares = Math.pow(x, 2) + Math.pow(y, 2);
            const term1 = Math.pow(sumOfSquares, 2/3);
            const term2 = (x * y) / (y - x);
            const resultXA = term1 + term2;
            elements.resultXA.textContent = `Resultado: ${resultXA.toFixed(6)}`;
            
            // Parte b
            const sqrtTerm = Math.sqrt(x + y);
            const denominatorXY = Math.pow(x - y, 2);
            const term3 = sqrtTerm / denominatorXY;
            const term4 = 2 * Math.pow(x, 2);
            const term5 = x * Math.pow(y, 2);
            const resultXB = term3 + term4 - term5;
            elements.resultXB.textContent = `Resultado: ${resultXB.toFixed(6)}`;
        }

        function calculateExercise4() {
            const c = parseFloat(elements.cInput.value) || 0;
            const d = parseFloat(elements.dInput.value) || 0;        
            const a = c * Math.pow(d, 2);
            const b = (c + a) / (c - d);
            elements.aValueDisplay.textContent = a.toFixed(6);
            elements.bValueDisplay.textContent = b.toFixed(6);
            
            // Parte a
            const expDB = Math.exp(d - b);
            const cbrtCA = Math.cbrt(c + a);
            const powCAD = Math.pow(c * a, d);
            const numeratorABCDA = expDB + cbrtCA - powCAD;
            const resultABCDA = numeratorABCDA / b;
            elements.resultABCDA.textContent = `Resultado: ${resultABCDA.toFixed(6)}`;
            
            // Parte b
            const termDIVc = d / c;
            const aDIVb = a / b;
            const powAB2 = Math.pow(aDIVb, 2);
            const expD = Math.exp(d);
            const resultABCDB = termDIVc + powAB2 - expD - aDIVb;
            elements.resultABCDB.textContent = `Resultado: ${resultABCDB.toFixed(6)}`;
        }
        function calculateExercise5() {
            const xVal = parseFloat(elements.angleInput.value) || 0;
            
            // Parte a
            const cosX = Math.cos(xVal);
            const sinX = Math.sin(xVal);
            
            const leftA = Math.pow(cosX, 2) - Math.pow(sinX, 2);
            const rightA = 1 - 2 * Math.pow(sinX, 2);
            
            elements.trigALeft.textContent = `Lado izquierdo: ${leftA.toFixed(8)}`;
            elements.trigARight.textContent = `Lado derecho: ${rightA.toFixed(8)}`;
            
            const diffA = Math.abs(leftA - rightA);
            const verificationA = diffA < 1e-10 ? 
                `<span class="text-success"><i class="fas fa-check-circle me-2"></i>Identidad verificada (diferencia: ${diffA.toExponential(2)})</span>` : 
                `<span class="text-danger"><i class="fas fa-times-circle me-2"></i>Las expresiones difieren en ${diffA.toExponential(2)}</span>`;
            elements.trigAVerification.innerHTML = verificationA;
            
            // Parte b
            const tanX = Math.tan(xVal);
            
            const leftB = tanX / (sinX - 2 * tanX);
            const rightB = 1 / (cosX - 2);
            
            elements.trigBLeft.textContent = `Lado izquierdo: ${leftB.toFixed(8)}`;
            elements.trigBRight.textContent = `Lado derecho: ${rightB.toFixed(8)}`;
            
            const diffB = Math.abs(leftB - rightB);
            const verificationB = diffB < 1e-10 ? 
                `<span class="text-success"><i class="fas fa-check-circle me-2"></i>Identidad verificada (diferencia: ${diffB.toExponential(2)})</span>` : 
                `<span class="text-danger"><i class="fas fa-times-circle me-2"></i>Las expresiones difieren en ${diffB.toExponential(2)}</span>`;
            elements.trigBVerification.innerHTML = verificationB;
        }