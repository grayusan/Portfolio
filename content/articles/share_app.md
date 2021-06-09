---
title: Sharing system
description: 'How I created the sharing system'
tags: [portfolio]
---

Google Photos is now not free. As an alternative option for myself, I wanted to develop an application that can share my photos with others. Django.

## Limiting Users' access

For privacy concerns, users' access to other users' photos must be restiricted. 

```python
class Post(models.Model):
    ~~~
    allowed_list = ListField()
```
By using this allowed_list field, each post limits users' access. 

```python
{% if user.username in object.allowed_list %}
```
By using this code in templates, it can limit access to post pages. 