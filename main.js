new Vue({
  el: '#app',
  data: {
    error: '',
    success: false,
    name: '',
    url: '',
  },
  methods: {
    create() {
      const body = {
        longUrl: this.url,
        short_url: this.name
      };

      fetch('/api/url/shorten_custom', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'content-type': 'application/json'
        }
      }).then(response => {
        return response.json();
      }).then(result => {
        if (result.isJoi) {
          this.error = result.details.map(detail => detail.message).join('. ');
        } else {
          this.success = true;
        }
      });
    }
  }
});