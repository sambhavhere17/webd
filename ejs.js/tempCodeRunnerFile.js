
  let data = instaData[username];

  res.render("insta.ejs", { data });
  console.log(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});