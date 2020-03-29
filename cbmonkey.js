    //<![CDATA[
$('#cb-monkey-main-menu').menuify();
$('#cb-monkey-main-menu .widget').addClass('show-menu');
$('.search-toggle').on('click', function () {
    $('body').toggleClass('search-active')
});
$('.blog-posts-title a.more,.related-title a.more').each(function () {
    var $t = $(this),
        $smt = viewAllText;
    if ($smt != '') {
        $t.text($smt)
    }
});
$('.follow-by-email-text').each(function () {
    var $t = $(this),
        $fbet = followByEmailText;
    if ($fbet != '') {
        $t.text($fbet)
    }
});
$('#sidebar-tabs').tabify();
$('.post-body strike').each(function () {
    var $t = $(this),
        $mtc = $t.text().trim();
    if ($mtc == '$ads={1}') {
        $t.replaceWith('<div id="cb-monkey-new-before-ad"/>')
    }
    if ($mtc == '$ads={2}') {
        $t.replaceWith('<div id="cb-monkey-new-after-ad"/>')
    }
});
$('#cb-monkey-new-before-ad').each(function () {
    var $t = $(this);
    if ($t.length) {
        $('#before-ad').appendTo($t)
    }
});
$('#cb-monkey-new-after-ad').each(function () {
    var $t = $(this);
    if ($t.length) {
        $('#after-ad').appendTo($t)
    }
});
$('#cb-monkey-main-before-ad .widget').each(function () {
    var $t = $(this);
    if ($t.length) {
        $t.appendTo($('#before-ad'))
    }
});
$('#cb-monkey-main-after-ad .widget').each(function () {
    var $t = $(this);
    if ($t.length) {
        $t.appendTo($('#after-ad'))
    }
});
$('.avatar-image-container img').attr('src', function ($this, i) {
    i = i.replace('//resources.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg');
    i = i.replace('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg');
    return i
});
$('.post-body a').each(function () {
    var $this = $(this),
        type = $this.text().trim(),
        sp = type.split('/'),
        txt = sp[0],
        ico = sp[1],
        color = sp.pop();
    if (type.match('button')) {
        $this.addClass('button').text(txt);
        if (ico != 'button') {
            $this.addClass(ico)
        }
        if (color != 'button') {
            $this.addClass('colored-button').css({
                'background-color': color
            })
        }
    }
});
$('.post-body strike').each(function () {
    var $this = $(this),
        type = $this.text().trim(),
        html = $this.html();
    if (type.match('contact-form')) {
        $this.replaceWith('<div class="contact-form"/>');
        $('.contact-form').append($('#ContactForm1'))
    }
    if (type.match('alert-success')) {
        $this.replaceWith('<div class="alert-message alert-success short-b">' + html + '</div>')
    }
    if (type.match('alert-info')) {
        $this.replaceWith('<div class="alert-message alert-info short-b">' + html + '</div>')
    }
    if (type.match('alert-warning')) {
        $this.replaceWith('<div class="alert-message alert-warning short-b">' + html + '</div>')
    }
    if (type.match('alert-error')) {
        $this.replaceWith('<div class="alert-message alert-error short-b">' + html + '</div>')
    }
    if (type.match('left-sidebar')) {
        $this.replaceWith('<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>')
    }
    if (type.match('right-sidebar')) {
        $this.replaceWith('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')
    }
    if (type.match('full-width')) {
        $this.replaceWith('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>')
    }
    if (type.match('code-box')) {
        $this.replaceWith('<pre class="code-box short-b">' + html + '</pre>')
    }
    var $sb = $('.post-body .short-b').find('b');
    $sb.each(function () {
        var $b = $(this),
            $t = $b.text().trim();
        if ($t.match('alert-success') || $t.match('alert-info') || $t.match('alert-warning') || $t.match('alert-error') || $t.match('code-box')) {
            $b.replaceWith("")
        }
    })
});
$('.cb-monkey-share-links .window-ify,.entry-share .window-ify').on('click', function () {
    var $this = $(this),
        url = $this.data('url'),
        wid = $this.data('width'),
        hei = $this.data('height'),
        wsw = window.screen.width,
        wsh = window.screen.height,
        mrl = Math.round(wsw / 2 - wid / 2),
        mrt = Math.round(wsh / 2 - hei / 2),
        win = window.open(url, '_blank', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=' + wid + ',height=' + hei + ',left=' + mrl + ',top=' + mrt);
    win.focus()
});
$('.cb-monkey-share-links').each(function () {
    var $t = $(this),
        $b = $t.find('.show-hid a');
    $b.on('click', function () {
        $t.toggleClass('show-hidden')
    })
});
$('.about-author .author-description span a').each(function () {
    var $this = $(this),
        cls = $this.text().trim(),
        url = $this.attr('href');
    $this.replaceWith('<li class="' + cls + '"><a href="' + url + '" title="' + cls + '" target="_blank"/></li>');
    $('.description-links').append($('.author-description span li'));
    $('.description-links').addClass('show')
});
function msgError() {
    return '<span class="no-posts"><b>Error:</b> No Results Found</span>'
}
function beforeLoader() {
    return '<div class="loader"/>'
}
function getFeedUrl(type, num, label) {
    var furl = '';
    switch (label) {
    case 'recent':
        furl = '/feeds/posts/summary?alt=json&max-results=' + num;
        break;
    case 'comments':
        if (type == 'list') {
            furl = '/feeds/comments/summary?alt=json&max-results=' + num
        } else {
            furl = '/feeds/posts/summary/-/' + label + '?alt=json&max-results=' + num
        }
        break;
    default:
        furl = '/feeds/posts/summary/-/' + label + '?alt=json&max-results=' + num;
        break
    }
    return furl
}
function getPostLink(feed, i) {
    for (var x = 0; x < feed[i].link.length; x++)
        if (feed[i].link[x].rel == 'alternate') {
            var link = feed[i].link[x].href;
            break
        } return link
}
function getPostTitle(feed, i) {
    var n = feed[i].title.$t;
    return n
}
function getPostImage(feed, i) {
    if ('media$thumbnail' in feed[i]) {
        var src = feed[i].media$thumbnail.url;
        if (src.match('img.youtube.com')) {
            src = src.replace('/default.', '/0.')
        }
        var img = src
    } else {
        img = 'https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'
    }
    return img
}
function getPostAuthor(feed, i) {
    var n = feed[i].author[0].name.$t,
        b = messages.postAuthorLabel,
        e = '';
    if (b != '') {
        e = '<i class="fas fa-user-shield"></i> '
    } else {
        e = ''
    }
    if (messages.postAuthor == 'true') {
        var code = '<span class="entry-author">' + e + '<span class="author">' + n + '</span></span>'
    } else {
        var code = ''
    }
    return code
}
function getPostDate(feed, i) {
    var c = feed[i].published.$t,
        d = c.substring(0, 4),
        f = c.substring(5, 7),
        m = c.substring(8, 10),
        h = monthFormat[parseInt(f, 10) - 1] + ' ' + m + ', ' + d;
    if (messages.postDate == 'true') {
        var code = '<span class="entry-time"><time class="published" datetime="' + c + '">' + h + '</time></span>'
    } else {
        code = ''
    }
    return code
}
function getPostMeta(author, date) {
    if (messages.postAuthor == 'true' && messages.postDate == 'true') {
        var long = '<div class="entry-meta m-1">' + author + date + '</div>'
    } else if (messages.postAuthor == 'true') {
        long = '<div class="entry-meta m-2">' + author + '</div>'
    } else if (messages.postDate == 'true') {
        long = '<div class="entry-meta m-2">' + date + '</div>'
    } else {
        long = ''
    }
    if (messages.postDate == 'true') {
        var small = '<div class="entry-meta m-2">' + date + '</div>'
    } else {
        small = ''
    }
    var code = [long, small];
    return code
}
function getPostLabel(feed, i) {
    if (feed[i].category != undefined) {
        var tag = feed[i].category[0].term,
            code = '<span class="entry-category">' + tag + '</span>'
    } else {
        code = ''
    }
    return code
}
function getPostComments(feed, i, link) {
    var n = feed[i].author[0].name.$t,
        e = feed[i].author[0].gd$image.src.replace('/s113', '/w55-h55-p-k-no-nu'),
        h = feed[i].title.$t;
    if (e.match('//img1.blogblog.com/img/blank.gif') || e.match('//img1.blogblog.com/img/b16-rounded.gif')) {
        var img = '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg'
    } else {
        var img = e
    }
    var code = '<article class="custom-item item-' + i + '"><a class="entry-image-link cmm-avatar" href="' + link + '"><span class="entry-thumb" data-image="' + img + '"/></a><h2 class="entry-title"><a href="' + link + '">' + n + '</a></h2><p class="cmm-snippet excerpt">' + h + '</p></article>';
    return code
}
function getCustomStyle(type, label, color, lClass) {
    lClass = label.replace(' ', '-');
    if (color != false) {
        if (type == 'featured') {
            var code = '.id-' + type + '-' + lClass + ' .entry-category{background-color:' + color + ';color:#fff}.id-' + type + '-' + lClass + ' .loader:after{border-color:' + color + ';border-right-color:rgba(155,155,155,0.2)}'
        } else {
            code = '.id-' + type + '-' + lClass + ' .entry-category{background-color:' + color + ';color:#fff}.id-' + type + '-' + lClass + ' .title-wrap > h3,.id-' + type + '-' + lClass + ' .title-wrap > a.more:hover,.id-' + type + '-' + lClass + ' .entry-header:not(.entry-info) .entry-title a:hover,.id-' + type + '-' + lClass + ' .entry-header:not(.entry-info) .entry-meta span.author{color:' + color + '}.id-' + type + '-' + lClass + ' .loader:after{border-color:' + color + ';border-right-color:rgba(155,155,155,0.2)}'
        }
    } else {
        code = ''
    }
    return code
}
function getAjax($this, type, num, label, color) {
    switch (type) {
    case 'msimple':
    case 'megatabs':
    case 'featured1':
    case 'featured2':
    case 'featured3':
    case 'block1':
    case 'col-left':
    case 'col-right':
    case 'grid1':
    case 'grid2':
    case 'videos':
    case 'gallery':
    case 'list':
    case 'related':
        if (label == false) {
            label = 'geterror404'
        }
        var furl = getFeedUrl(type, num, label);
        $.ajax({
            url: furl,
            type: 'GET',
            dataType: 'json',
            cache: true,
            beforeSend: function (data) {
                var style = getCustomStyle(type, label, color),
                    lClass = label.replace(' ', '-');
                switch (type) {
                case 'featured1':
                case 'featured2':
                case 'featured3':
                    $('#page-skin-2').prepend(style);
                    $this.html(beforeLoader()).parent().addClass('type-' + type + ' id-' + type + '-' + lClass + ' show-ify');
                    break;
                case 'block1':
                case 'grid1':
                case 'grid2':
                case 'videos':
                case 'gallery':
                    $('#page-skin-2').prepend(style);
                    $this.html(beforeLoader()).parent().addClass('type-' + type + ' id-' + type + '-' + lClass + ' show-ify');
                    break;
                case 'col-left':
                case 'col-right':
                    $('#page-skin-2').prepend(style);
                    $this.html(beforeLoader()).parent().addClass('type-' + type + ' block-column id-' + type + '-' + lClass + ' show-ify');
                    break;
                case 'list':
                    $this.html(beforeLoader());
                    break;
                case 'related':
                    $this.html(beforeLoader()).parent().addClass('show-ify');
                    break
                }
            },
            success: function (data) {
                var html = '';
                switch (type) {
                case 'msimple':
                case 'megatabs':
                    html = '<ul class="mega-widget">';
                    break;
                case 'featured1':
                case 'featured2':
                case 'featured3':
                    html = '<div class="featured-posts ' + type + '">';
                    break;
                case 'block1':
                    html = '<div class="content-block-1">';
                    break;
                case 'col-left':
                case 'col-right':
                    html = '<div class="column-block">';
                    break;
                case 'grid1':
                    html = '<div class="grid-block-1 total-' + num + '">';
                    break;
                case 'grid2':
                    html = '<div class="grid-block-2">';
                    break;
                case 'videos':
                    html = '<div class="videos-block total-' + num + '">';
                    break;
                case 'gallery':
                    html = '<div class="gallery-block total-' + num + '">';
                    break;
                case 'list':
                    html = '<div class="custom-widget">';
                    break;
                case 'related':
                    html = '<div class="related-posts total-' + num + '">';
                    break
                }
                var entry = data.feed.entry;
                if (entry != undefined) {
                    for (var i = 0, feed = entry; i < feed.length; i++) {
                        var link = getPostLink(feed, i),
                            title = getPostTitle(feed, i, link),
                            image = getPostImage(feed, i, link),
                            author = getPostAuthor(feed, i),
                            date = getPostDate(feed, i),
                            meta = getPostMeta(author, date),
                            tag = getPostLabel(feed, i);
                        var content = '';
                        switch (type) {
                        case 'msimple':
                        case 'megatabs':
                            content += '<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
                            break;
                        case 'featured1':
                        case 'featured2':
                        case 'featured3':
                            switch (i) {
                            case 0:
                                content += '<article class="featured-item item-' + i + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a>' + tag + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></div></article><div class="featured-scroll">';
                                break;
                            default:
                                content += '<article class="featured-item item-' + i + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a>' + tag + '<div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></div></article>';
                                break
                            }
                            break;
                        case 'block1':
                            switch (i) {
                            case 0:
                                content += '<article class="block-item item-' + i + '"><div class="block-inner">' + tag + '<a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></div></article>';
                                break;
                            default:
                                content += '<article class="block-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
                                break
                            }
                            break;
                        case 'col-left':
                        case 'col-right':
                            switch (i) {
                            case 0:
                                content += '<article class="column-item item-' + i + '"><div class="column-inner">' + tag + '<a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></div></article>';
                                break;
                            default:
                                content += '<article class="column-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
                                break
                            }
                            break;
                        case 'grid1':
                            content += '<article class="grid-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
                            break;
                        case 'grid2':
                            content += '<article class="grid-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></article>';
                            break;
                        case 'videos':
                            switch (i) {
                            case 0:
                                content += '<article class="videos-item item-' + i + '"><div class="videos-inner">' + tag + '<a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/><span class="video-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></div></article>';
                                break;
                            default:
                                content += '<article class="videos-item item-' + i + '"><div class="videos-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/><span class="video-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></div></article>';
                                break
                            }
                            break;
                        case 'gallery':
                            switch (i) {
                            case 0:
                                content += '<article class="gallery-item item-' + i + '"><div class="gallery-inner"><span class="entry-category">Gallery Image</span><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/><span class="gallery-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[0] + '</div></div></article>';
                                break;
                            default:
                                content += '<article class="gallery-item item-' + i + '"><div class="gallery-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/><span class="gallery-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></div></div></article>';
                                break
                            }
                            break;
                        case 'list':
                            switch (label) {
                            case 'comments':
                                var code = getPostComments(feed, i, link);
                                content += code;
                                break;
                            default:
                                content += '<article class="custom-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
                                break
                            }
                            break;
                        case 'related':
                            content += '<article class="related-item post item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + meta[1] + '</div></article>';
                            break
                        }
                        html += content
                    }
                } else {
                    switch (type) {
                    case 'msimple':
                    case 'megatabs':
                        html = '<ul class="mega-widget">' + msgError() + '</ul>';
                        break;
                    default:
                        html = msgError();
                        break
                    }
                }
                switch (type) {
                case 'msimple':
                    html += '</ul>';
                    $this.append(html).addClass('msimple');
                    $this.find('a:first').attr('href', function ($this, href) {
                        switch (label) {
                        case 'recent':
                            href = href.replace(href, '/search');
                            break;
                        default:
                            href = href.replace(href, '/search/label/' + label);
                            break
                        }
                        return href
                    });
                    break;
                case 'featured1':
                case 'featured2':
                case 'featured3':
                    html += '</div></div>';
                    $this.html(html);
                    break;
                case 'block1':
                case 'grid1':
                case 'grid2':
                case 'col-left':
                case 'col-right':
                case 'videos':
                case 'gallery':
                    html += '</div>';
                    $this.html(html);
                    break;
                default:
                    html += '</div>';
                    $this.html(html);
                    break
                }
                $this.find('span.entry-thumb').lazyify()
            },
            error: function () {
                switch (type) {
                case 'msimple':
                case 'megatabs':
                    $this.append('<ul>' + msgError() + '</ul>');
                    break;
                default:
                    $this.html(msgError());
                    break
                }
            }
        })
    }
}
function ajaxMega($this, type, num, label, mtc) {
    if (mtc.match('getmega')) {
        if (type == 'msimple' || type == 'megatabs' || type == 'mtabs') {
            return getAjax($this, type, num, label)
        } else {
            $this.append('<ul class="mega-widget">' + msgError() + '</ul>')
        }
    }
}
function ajaxFeatured($this, type, num, label, mtc, color) {
    if (mtc.match('getfeatured')) {
        if (type == 'featured1' || type == 'featured2' || type == 'featured3') {
            return getAjax($this, type, num, label, color)
        } else {
            $this.html(beforeLoader()).parent().addClass('show-ify');
            setTimeout(function () {
                $this.html(msgError())
            }, 500)
        }
    }
}
function ajaxBlock($this, type, num, label, mtc, color) {
    if (mtc.match('getblock')) {
        if (type == 'block1' || type == 'col-left' || type == 'col-right' || type == 'grid1' || type == 'grid2' || type == 'videos' || type == 'gallery') {
            var moreText = viewAllText,
                text = '';
            if (moreText != '') {
                text = moreText
            } else {
                text = messages.viewAll
            }
            $this.parent().find('.widget-title').append('<a class="more" href="/search/label/' + label + '">' + text + '</a>');
            return getAjax($this, type, num, label, color)
        } else {
            $this.html(msgError()).parent().addClass('show-ify')
        }
    }
}
function ajaxWidget($this, type, num, label, mtc) {
    if (mtc.match('getwidget')) {
        if (type == 'list') {
            return getAjax($this, type, num, label)
        } else {
            $this.html(msgError())
        }
    }
}
function ajaxRelated($this, type, num, label, mtc) {
    if (mtc.match('getrelated')) {
        return getAjax($this, type, num, label)
    }
}
function shortCodeIfy(a, b, c) {
    var d = a.split('$'),
        e = /[^{\}]+(?=})/g;
    for (var i = 0; i < d.length; i++) {
        var f = d[i].split('=');
        if (f[0].trim() == b) {
            c = f[1];
            if (c.match(e) != null) {
                return String(c.match(e)).trim()
            } else {
                return false
            }
        }
    }
    return false
}
function megaTabs($this, type, label, mtc) {
    if (type == 'mtabs') {
        if (label != false) {
            var lLen = label.length,
                code = '<ul class="complex-tabs">';
            for (var i = 0; i < lLen; i++) {
                var tag = label[i];
                if (tag) {
                    code += '<div class="mega-tab" tab-ify="' + tag + '"/>'
                }
            }
            code += '</ul>';
            $this.addClass('mega-tabs mtabs').append(code);
            $this.find('> a:first').attr('href', 'javascript:;');
            $('.mega-tab').each(function () {
                var $this = $(this),
                    label = $this.attr('tab-ify');
                ajaxMega($this, 'megatabs', 4, label, mtc)
            });
            $this.find('ul.complex-tabs').tabify({
                onHover: true
            })
        } else {
            $this.append('<ul class="mega-widget">' + msgError() + '</ul>')
        }
    }
}
$('#cb-monkey-main-menu li').each(function (type, label) {
    var lc = $(this),
        $this = lc,
        ltx = lc.find('a'),
        txt = ltx.attr('href').trim(),
        mtc = txt.toLowerCase();
    type = shortCodeIfy(txt, 'type');
    label = shortCodeIfy(txt, 'label');
    if (mtc.match('getmega')) {
        $this.addClass('has-sub mega-menu')
    }
    ajaxMega($this, type, 5, label, mtc);
    if (type == 'mtabs') {
        if (label != false) {
            label = label.split('/')
        }
        megaTabs($this, type, label, mtc)
    }
});
$('#featured .HTML .widget-content').each(function (type, num, label, color) {
    var $this = $(this),
        txt = $this.text().trim(),
        mtc = txt.toLowerCase();
    type = shortCodeIfy(txt, 'type');
    label = shortCodeIfy(txt, 'label');
    color = shortCodeIfy(txt, 'color');
    switch (type) {
    case 'featured2':
        num = 4;
        break;
    case 'featured3':
        num = 5;
        break;
    default:
        num = 3;
        break
    }
    ajaxFeatured($this, type, num, label, mtc, color)
});
$('.cb-monkey-content-blocks .HTML .widget-content').each(function (type, num, label, color) {
    var $this = $(this),
        txt = $this.text().trim(),
        mtc = txt.toLowerCase();
    type = shortCodeIfy(txt, 'type');
    num = shortCodeIfy(txt, 'results');
    label = shortCodeIfy(txt, 'label');
    color = shortCodeIfy(txt, 'color');
    ajaxBlock($this, type, num, label, mtc, color)
});
$('.cb-monkey-widget-ready .HTML .widget-content').each(function (type, num, label) {
    var $this = $(this),
        txt = $this.text().trim(),
        mtc = txt.toLowerCase();
    type = shortCodeIfy(txt, 'type');
    num = shortCodeIfy(txt, 'results');
    label = shortCodeIfy(txt, 'label');
    ajaxWidget($this, type, num, label, mtc)
});
$('.cb-monkey-related-content').each(function () {
    var $this = $(this),
        label = $this.find('.related-tag').attr('data-label'),
        num = relatedPostsNum;
    ajaxRelated($this, 'related', num, label, 'getrelated')
});
$('.cb-monkey-blog-post-comments').each(function () {
    var $this = $(this),
        system = commentsSystem,
        facebook = '<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-colorscheme="' + fbCommentsTheme + '" data-numposts="5"></div>',
        sClass = 'comments-system-' + system;
    switch (system) {
    case 'blogger':
        $this.addClass(sClass).show();
        $('.entry-meta .entry-comments-link').addClass('show');
        break;
    case 'disqus':
        $this.addClass(sClass).show();
        break;
    case 'facebook':
        $this.addClass(sClass).find('#comments').html(facebook);
        $this.show();
        break;
    case 'hide':
        $this.hide();
        break;
    default:
        $this.addClass('comments-system-blogger').show();
        $('.entry-meta .entry-comments-link').addClass('show');
        break
    }
    var $r = $this.find('.comments .toplevel-thread > ol > .comment .comment-actions .comment-reply'),
        $c = $this.find('.comments .toplevel-thread > #top-continue');
    $r.on('click', function () {
        $c.show()
    });
    $c.on('click', function () {
        $c.hide()
    })
});
$(function () {
    $('.index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar').lazyify();
    $('.mobile-logo').each(function () {
        var $t = $(this),
            $l = $('#main-logo .header-widget a').clone();
        $l.find('#h1-tag').remove();
        $l.appendTo($t)
    });
    $('#cb-monkey-mobile-menu').each(function () {
        var $t = $(this),
            $m = $('#cb-monkey-main-menu-nav').clone();
        $m.attr('id', 'main-mobile-nav');
        $m.find('.mega-widget, .mega-tab').remove();
        $m.find('li.mega-tabs .complex-tabs').each(function () {
            var $eq = $(this);
            $eq.replaceWith($eq.find('> ul.select-tab').attr('class', 'sub-menu m-sub'))
        });
        $m.find('.mega-menu:not(.mega-tabs) > a').each(function ($l, $u) {
            var $a = $(this),
                $h = $a.attr('href').trim(),
                $m = $h.toLowerCase();
            if ($m.match('getmega')) {
                $l = shortCodeIfy($h, 'label');
                $l == 'recent' ? $u = '/search' : $u = '/search/label/' + $l;
                $a.attr('href', $u)
            }
        });
        $m.find('.mega-tabs ul li > a').each(function () {
            var $a = $(this),
                $l = $a.text().trim();
            $a.attr('href', '/search/label/' + $l)
        });
        $m.appendTo($t);
        $('.show-cb-monkey-mobile-menu, .hide-cb-monkey-mobile-menu, .overlay').on('click', function () {
            $('body').toggleClass('nav-active')
        });
        $('.cb-monkey-mobile-menu .has-sub').append('<div class="submenu-toggle"/>');
        $('.cb-monkey-mobile-menu .mega-menu').find('.submenu-toggle').remove();
        $('.cb-monkey-mobile-menu .mega-tabs').append('<div class="submenu-toggle"/>');
        $('.cb-monkey-mobile-menu ul li .submenu-toggle').on('click', function ($this) {
            if ($(this).parent().hasClass('has-sub')) {
                $this.preventDefault();
                if (!$(this).parent().hasClass('show')) {
                    $(this).parent().addClass('show').children('.m-sub').slideToggle(170)
                } else {
                    $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170)
                }
            }
        })
    });
    $('.social-mobile').each(function () {
        var $t = $(this),
            $l = $('#main-navbar-social ul.social').clone();
        $l.appendTo($t)
    });
    $('#cb-monkey-header-wrapper .headerify').each(function () {
        var $this = $(this);
        if (fixedMenu == true) {
            if ($this.length > 0) {
                var t = $(document).scrollTop(),
                    w = $this.offset().top,
                    s = $this.height(),
                    h = (w + s);
                $(window).scroll(function () {
                    var n = $(document).scrollTop(),
                        f = $('#footer-wrapper').offset().top,
                        m = (f - s);
                    if (n < m) {
                        if (n > h) {
                            $this.addClass('is-fixed')
                        } else if (n <= 0) {
                            $this.removeClass('is-fixed')
                        }
                        if (n > t) {
                            $this.removeClass('show')
                        } else {
                            $this.addClass('show')
                        }
                        t = $(document).scrollTop()
                    }
                })
            }
        }
    });
    $('#main-wrapper,#sidebar-wrapper').each(function () {
        if (fixedSidebar == true) {
            if (fixedMenu == true) {
                var $topMargin = 75
            } else {
                $topMargin = 25
            }
            $(this).theiaStickySidebar({
                additionalMarginTop: $topMargin,
                additionalMarginBottom: 25
            })
        }
    });
    $('#post-body iframe').each(function () {
        var $t = $(this),
            $mtc = $t.attr('src');
        if ($mtc.match('www.youtube.com')) {
            $t.wrap('<div class="responsive-video-wrap"/>')
        }
    });
    $('p.comment-content').each(function () {
        var $t = $(this);
        $t.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>');
        $t.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    });
    $('#cb-monkey-load-more-link').each(function () {
        var $this = $(this),
            $loadLink = $this.data('load');
        if ($loadLink) {
            $('#cb-monkey-load-more-link').show()
        }
        $('#cb-monkey-load-more-link').on('click', function (a) {
            $('#cb-monkey-load-more-link').hide();
            $.ajax({
                url: $loadLink,
                success: function (data) {
                    var $p = $(data).find('.blog-posts');
                    $p.find('.index-post').addClass('post-animated post-fadeInUp');
                    $('.blog-posts').append($p.html());
                    $loadLink = $(data).find('#cb-monkey-load-more-link').data('load');
                    if ($loadLink) {
                        $('#cb-monkey-load-more-link').show()
                    } else {
                        $('#cb-monkey-load-more-link').hide();
                        $('#blog-pager .no-more').addClass('show')
                    }
                    $('.index-post .entry-image-link .entry-thumb').lazyify()
                },
                beforeSend: function () {
                    $('#blog-pager .loading').show()
                },
                complete: function () {
                    $('#blog-pager .loading').hide()
                }
            });
            a.preventDefault()
        })
    });
    $('.back-top').each(function () {
        var $t = $(this);
        $(window).on('scroll', function () {
            $(this).scrollTop() >= 100 ? $t.fadeIn(250) : $t.fadeOut(250);
            $t.offset().top >= $('#footer-wrapper').offset().top - 32 ? $t.addClass('on-footer') : $t.removeClass('on-footer')
        }), $t.click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
});
//]]>
