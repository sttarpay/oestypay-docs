import{_ as i,c as a,a0 as t,o as e}from"./chunks/framework.BTA17ug4.js";const c=JSON.parse('{"title":"Gerando Checkout de pagamento","description":"","frontmatter":{},"headers":[],"relativePath":"v1/generate-checkout.md","filePath":"v1/generate-checkout.md"}'),n={name:"v1/generate-checkout.md"};function p(o,s,h,l,k,d){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="gerando-checkout-de-pagamento" tabindex="-1">Gerando Checkout de pagamento <a class="header-anchor" href="#gerando-checkout-de-pagamento" aria-label="Permalink to &quot;Gerando Checkout de pagamento&quot;">​</a></h1><p>Um checkout de pagamento Pix é um processo online onde os compradores podem pagar por suas compras usando o sistema de pagamento instantâneo Pix. Ele facilita a transação ao gerar um QRCode Pix ou chave Pix, permitindo que o pagamento seja efetuado rapidamente pelo comprador, diretamente de sua conta bancária ou aplicativo de pagamento.</p><p>Para gerar um Checkout de pagamento basta enviar uma requisição do tipo <code>POST</code> para o endpoint <code>/generate-checkout</code> passando os seguintes parâmetros no corpo da requisição:</p><table tabindex="0"><thead><tr><th>parâmetro</th><th>Obrigatório</th><th>tipo</th><th>descrição</th></tr></thead><tbody><tr><td>value</td><td>Sim</td><td><code>float</code></td><td>Valor em Reais com ponto flutuante para centavos</td></tr><tr><td>description</td><td>Sim</td><td><code>string</code></td><td>Descrição do produto do checkout</td></tr><tr><td>expires</td><td>Não</td><td><code>int</code></td><td>Tempo para vencimento do QRCode gerado pelo checkout em segundos (padrão é 3600)</td></tr></tbody></table><p>Exemplo:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://oestypay.com/api/v1/generate-checkout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-H </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;api-key: SEU_API_KEY&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-H </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Content-Type: application/json&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;{&quot;value&quot;: 2399.99, &quot;expires&quot;: 3600, &quot;description&quot;: &quot;Produto 1243, Cliente: Roberto&quot;}&#39;</span></span></code></pre></div><p>Caso tenha sido executado com sucesso, você deve receber um status-code <code>200</code> com a seguinte resposta:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;q13iQcyv&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Sem titulo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Produto 1243, Cliente: Roberto&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\/\\/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2399.99</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;created_at&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2024-08-01T06:37:46.000000Z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;updated_at&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2024-08-01T06:37:46.000000Z&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,8)]))}const u=i(n,[["render",p]]);export{c as __pageData,u as default};
