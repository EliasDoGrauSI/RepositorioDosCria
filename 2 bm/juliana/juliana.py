import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# =============================================
# 1. Dados da Tabela do IRPF 2024 (Fonte: Receita Federal)
# =============================================
dados_ir = {
    "Faixa de Renda (R$)": [
        "Até 1.903,98",
        "1.903,99 a 2.826,65",
        "2.826,66 a 3.751,05",
        "3.751,06 a 4.664,68",
        "Acima de 4.664,68"
    ],
    "Alíquota (%)": [0, 7.5, 15, 22.5, 27.5],
    "Dedução (R$)": [0, 142.80, 354.80, 636.13, 869.36]
}

df = pd.DataFrame(dados_ir)

# =============================================
# 2. Gráfico de Barras das Alíquotas
# =============================================
plt.figure(figsize=(12, 6))
sns.set_style("whitegrid")
barplot = sns.barplot(
    data=df, 
    x="Faixa de Renda (R$)", 
    y="Alíquota (%)", 
    palette="Blues"
)

plt.title("Alíquotas do Imposto de Renda 2024 (Pessoa Física)", fontweight="bold", pad=20)
plt.xlabel("Faixa de Renda Mensal", fontsize=12)
plt.ylabel("Alíquota (%)", fontsize=12)
plt.xticks(rotation=45, ha="right")

# Adicionar valores das alíquotas nas barras
for i, aliquota in enumerate(df["Alíquota (%)"]):
    plt.text(i, aliquota + 0.5, f"{aliquota}%", ha="center", fontsize=10)

plt.tight_layout()
plt.show()

# =============================================
# 3. Gráfico de Linha do Imposto Acumulado
# =============================================
def calcular_imposto(renda):
    if renda <= 1903.98:
        return 0
    elif renda <= 2826.65:
        return renda * 0.075 - 142.80
    elif renda <= 3751.05:
        return renda * 0.15 - 354.80
    elif renda <= 4664.68:
        return renda * 0.225 - 636.13
    else:
        return renda * 0.275 - 869.36

# Gerar dados para o gráfico
rendas = np.linspace(1000, 10000, 500)
impostos = [calcular_imposto(r) for r in rendas]

plt.figure(figsize=(12, 6))
plt.plot(rendas, impostos, color="#e74c3c", lw=2.5, label="Imposto Devido")
plt.title("Progressividade do IR: Imposto Devido x Renda Mensal", fontweight="bold", pad=20)
plt.xlabel("Renda Mensal (R$)", fontsize=12)
plt.ylabel("Imposto Devido (R$)", fontsize=12)
plt.grid(linestyle="--", alpha=0.6)

# Destacar faixas do IR
faixas = [1903.98, 2826.65, 3751.05, 4664.68]
for faixa in faixas:
    plt.axvline(x=faixa, color="gray", linestyle=":", alpha=0.5)
    plt.text(faixa, max(impostos)*0.9, f"R$ {faixa:,.2f}", rotation=90, va="top", ha="right", backgroundcolor="white")

plt.legend()
plt.tight_layout()
plt.show()

# =============================================
# 4. Exibir Tabela no Console 
# =============================================
print("\nTabela do IRPF 2024:")
print(df.to_markdown(index=False))