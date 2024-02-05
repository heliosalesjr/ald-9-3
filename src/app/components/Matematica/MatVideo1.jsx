'use client'
import React from 'react';
import ReactPlayer from 'react-player';



function MatVideo1() {
    return (
        <div className='max-w-7xl mx-auto py-12'>
          <div className=" p-4 ">
            
    
            <div className="p-4 flex flex-col md:flex-row items-center">
            
              <div className="w-full">
                
                    <h1 className="text-4xl font-bold text-slate-800">Como trabalhar os juros compostos</h1>
                
                    <p className=" text-slate-700 mb-4 py-2">Nas situações em que há juros compostos, o tomador do empréstimo terá juros não só sobre seu capital mas sobre o capital acumulado aos juros que ganhou no período anterior. Isso significa que, no primeiro período, há juros a serem contabilizados. No segundo período, os juros são calculados sobre o capital inicial acrescido dos juros do primeiro período, e assim sucessivamente. Desse modo, os juros resultantes não são constantes por período, e vão sempre aumentando. É como se, a cada novo período, a taxa fosse aumentando.</p>
                    <p className=" text-slate-700 mb-4 py-2">Confira abaixo um trecho do livro que mostra como o professor Carlos trabalhou Juros Compostos:</p>
                    <img className="max-w-3xl mx-auto p-4" src="images/mat3.jpg" alt="Imagem" />
              </div>
              
            </div>
          </div>
        
        </div>
      );
    }

export default MatVideo1