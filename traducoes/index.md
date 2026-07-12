---
layout: layout.njk
title: Traduções
---

## Lista de Traduções

Cada págia aqui é um markdown (.md) que está presente no repositório e ele é listado automaticamente sem ter que atualizar nada manualmente.

<ul>
{% for item in collections.traducoes %}
    <li>
        <a href="{{ item.url }}">{{ item.data.title }}</a>
    </li>
{% endfor %}
</ul>