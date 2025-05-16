import numpy as np
import matplotlib.pyplot as plt
from matplotlib import gridspec

# Configuração geral dos gráficos
plt.figure(figsize=(12, 8))
plt.suptitle('Gráficos de Funções do Primeiro e Segundo Grau', fontsize=16)
gs = gridspec.GridSpec(2, 2, hspace=0.4, wspace=0.3)

# Eixo x comum para todos os gráficos
x = np.linspace(-5, 5, 400)

## 1) Funções do Primeiro Grau
# Função crescente: y = 2x + 1
ax1 = plt.subplot(gs[0, 0])
y1 = 2*x + 1
ax1.plot(x, y1, 'b-', label='y = 2x + 1 (crescente)')
ax1.set_title('Função do 1º Grau Crescente')
ax1.grid(True)
ax1.axhline(0, color='black', linewidth=0.5)
ax1.axvline(0, color='black', linewidth=0.5)
ax1.legend()

# Função decrescente: y = -3x + 2
ax2 = plt.subplot(gs[0, 1])
y2 = -3*x + 2
ax2.plot(x, y2, 'r-', label='y = -3x + 2 (decrescente)')
ax2.set_title('Função do 1º Grau Decrescente')
ax2.grid(True)
ax2.axhline(0, color='black', linewidth=0.5)
ax2.axvline(0, color='black', linewidth=0.5)
ax2.legend()

## 2) Funções do Segundo Grau
# Função crescente (concavidade para cima): y = x² - 2x - 3
ax3 = plt.subplot(gs[1, 0])
y3 = x**2 - 2*x - 3
ax3.plot(x, y3, 'g-', label='y = x² - 2x - 3 (côncava para cima)')
ax3.set_title('Função do 2º Grau com Concavidade para Cima')
ax3.grid(True)
ax3.axhline(0, color='black', linewidth=0.5)
ax3.axvline(0, color='black', linewidth=0.5)
ax3.legend()

# Função decrescente (concavidade para baixo): y = -x² + 4x + 1
ax4 = plt.subplot(gs[1, 1])
y4 = -x**2 + 4*x + 1
ax4.plot(x, y4, 'm-', label='y = -x² + 4x + 1 (côncava para baixo)')
ax4.set_title('Função do 2º Grau com Concavidade para Baixo')
ax4.grid(True)
ax4.axhline(0, color='black', linewidth=0.5)
ax4.axvline(0, color='black', linewidth=0.5)
ax4.legend()

plt.show()