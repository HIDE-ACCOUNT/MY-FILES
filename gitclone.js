cmd({
            pattern: "gitclone",
            desc: "Downloads apks  .",
            category: "downloader",
            filename: __filename,
            use: '<add sticker url.>',
        },
        async(Void, citel, text) => {
	if (!text) return await citel.reply('*Provide Repo Url, Ex:- _.gitclone https://github.com/KALINDU-LK/SONIC-MD_*') 
    const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    if (!regex.test(text) ) return await citel.reply('*Uhh Please, Provide Valid Repositry Url*');
    let [_, user, repo] = text.match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    //citel.send(`✳️ Wait, sending repository.. \n` + filename.toString() )
	await Void.sendMessage(citel.chat , {document : { url : url }, fileName:  filename,mimetype: 'application/zip',  })

	})
