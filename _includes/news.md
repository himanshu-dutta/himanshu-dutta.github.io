<h2 id="news">News</h2>

<!-- Scrollable news block to keep the page compact -->
<div class="news" style="max-height:220px; overflow-y:auto; padding-right:8px;">
  <ul class="news-list">
    {% assign news_sorted = site.data.news.main | sort: 'date' | reverse %}
    {% for item in news_sorted %}
    <li style="margin-bottom: 0.75rem;">
      <div style="display:flex;align-items:flex-start;gap:12px;">
        <div style="min-width:120px;color:#777;font-size:0.95rem;">{{ item.date | date: "%B %Y" }}</div>
        <div>
          <div style="font-weight:700;">
            {% if item.link %}<a href="{{ item.link }}">{{ item.title }}</a>{% else %}{{ item.title }}{% endif %}
            
          </div>
          {% if item.description %}<div style="color:#444;margin-top:3px;">{{ item.description }}</div>{% endif %}
        </div>
      </div>
    </li>
    {% endfor %}
  </ul>
</div>
