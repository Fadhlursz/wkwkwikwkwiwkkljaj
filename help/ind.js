const fs = require('fs')


exports.ok = () => {
    return `Ok desu~`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `Command *${cmd}* tidak terdaftar di *${prefix}menu*`
}

exports.hadis = (command) => {
    return `*── 「 HADIS 」 ──*

Daftar hadis:
1. Hadis Bukhari ada 6638 hadis
    _usage_: ${command} bukhari 1
2. Hadis Muslim ada 4930 hadis
    _usage_: ${command} muslim 25
3. Hadis Tirmidzi ada 3625 hadis
    _usage_: ${command} tirmidzi 10
4. Hadis nasai ada 5364 hadis
    _usage_: ${command} nasai 6
5. Hadis Ahmad ada 4305 hadis
    _usage_: ${command} ahmad 5
6. Hadis Abu Daud ada 4419 hadis
    _usage_: ${command} abu-daud 45
7. Hadis Malik ada 1587 hadis
    _usage_: ${command} malik 45
8. Hadis Ibnu Majah ada 4285 hadis
    _usage_: ${command} ibnu-majah 8
9. Hadis Darimi ada 2949 hadis
    _usage_: ${command} darimi 3`
}

exports.groupBot = (sender) => {
    return `
Link Group NotBot : https://tinyurl.com/ygwwmu3b


Jangan lupa join ya kak @${sender.split('@')[0]}`
}

exports.BlockBan = (ownerNumber, prefix) => {
    return `*Sepertinya kamu telah diblok/diban. Hubungi untuk mengetahui cara membuka blok!*\n\n Owner: wa.me/${ownerNumber}`
}

exports.ownerOnly = () => {
    return `Command ini khusus Owner-sama!`
}

exports.doneOwner = () => {
    return `Sudah selesai, Owner-sama~`
}

exports.groupOnly = () => {
    return `Command ini hanya bisa digunakan di dalam grup!`
}

exports.notNsfw = () => {
    return `Command NSFW belum diaktifkan!`
}

exports.nsfwOn = () => {
    return `Command NSFW berhasil *diaktifkan*!`
}

exports.nsfwOff = () => {
    return `Command NSFW berhasil *dinonaktifkan*!`
}

exports.nsfwAlready = () => {
    return `Command NSFW sudah diaktifkan sebelumnya.`
}

exports.stickerDel = () => {
    return `Stiker berhasil dihapus dari database!`
}

exports.stickerAdd = () => {
    return `Stiker berhasil ditambahkan ke database!`
}

exports.stickerAddAlready = (q) => {
    return `Stiker dengan keyword "${q}" sudah ada di database!`
}

exports.stickerNotFound = () => {
    return `Stiker tidak ditemukan!`
}

exports.vnDel = () => {
    return `Vn berhasil dihapus dari database!`
}

exports.vnAdd = () => {
    return `Vn berhasil ditambahkan ke database!`
}

exports.vnAddAlready = (q) => {
    return `Vn dengan keyword "${q}" sudah ada di database!`
}

exports.vnNotFound = () => {
    return `Vn tidak ditemukan!`
}

exports.imageAdd = () => {
    return `image berhasil ditambahkan ke database!`
}

exports.imageAddAlready = (q) => {
    return `image dengan keyword "${q}" sudah ada di database!`
}

exports.imageNotFound = () => {
    return `image tidak ditemukan!`
}

exports.respon = (ketikan, respt) => {
    return `
*── 「 AUTO RESPON 」 ──*

Auto-Respon berhasil dibuat dengan:

➸ *Text*: ${ketikan}
➸ *Akan Merespon*: ${respt}`
}

exports.responAlready = (ketikan) => {
    return `
Maaf, autorespon untuk teks "${ketikan}" sudah ada sebelumnya,harap memasukkan teks lain.`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.levelingOn = () => {
    return `Fitur leveling berhasil *diaktifkan*!`
}

exports.levelingOff = () => {
    return `Fitur leveling berhasil *dinonaktifkan*!`
}

exports.levelingOnAlready = () => {
    return `Fitur leveling telah diaktifkan sebelumnya.`
}

exports.levelingNotOn = () => {
    return `Fitur leveling belum diaktifkan!`
}

exports.claimOn = (yo) => {
    return `
*── 「 CLAIM  」 ──*

Selamat kamu mendapatkan *10000Xp* dan *$${yo}* balance
Dari claim harian`
}

exports.claimOnAlready = () => {
    return `Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.menu = (prefix, ucap, pushname2, jumlahUser, timebot, owner, jumlahHarian, jumlahCommand, sender, time, public, levelMenu, xpMenu, reqXp, uangku, role, Limitnya) => {
    return `\`\`\`Selamat ${ucap} Kak @${sender.split('@')[0]} 😳\`\`\`

╭── 「 *BOT INFO* 」 ──
│
│❒͡  _*NOT BOT*_ 
│❒͡ *Contact My Owner*
│ *https://wa.me/${owner}*
│❒͡ *Time: ${time}*
│❒͡ *STATUS* :「 ${public} 」
│
╰── 「 *NOT BOT* 」 ──

❉──────────────────❉  
*Name* : *${pushname2}* 
*Your API* : *https://wa.me/${sender.split('@')[0]}*
*Limit* : *${Limitnya}*


*Your Progress*:
*Level: ${levelMenu}*
*XP: ${xpMenu} / ${reqXp}*
*Role: ${role}*
*Your Balance: $${uangku}*
❉──────────────────❉  

*── 「 BOT STATUS 」 ──*

 ❏ *${timebot}*

 𒍮 *Auto-Regis User: ${jumlahUser}*

 𒍮 *Total Hit Bot : ${jumlahCommand}*

 𒍮 *Total Hit Today : ${jumlahHarian}*

*── 「 BOT GROUP 」 ──*

Group User'Notbot : https://tinyurl.com/ygwwmu3b

Group User'Notbot ~ 2 : soon~

*── 「 NOT BOT 」 ──*


*Official BOT By @0*`
}

exports.menuDownloader = (prefix) => {
    return `
── 「 DOWNLOADER 」 ──

1. #facebook
Download Facebook video.
Aliases: fb
Usage: #facebook link_video

2. #joox
Mencari dan men-download lagu dari Joox.
Aliases: -
Usage: #joox judul_lagu

3. #tiktok
Mendownload video TikTok.
Aliases: -
Usage: #tiktok link_video

4. #twitter
Download Twitter media.
Aliases: twt
Usage: #twiter link

5. #tiktokmusic
Download source music dari tiktokvideo.
Aliases: -
Usage: #tiktokmusic link_video

6. #igdl
Download video dari Source Instagram.
Aliases: instagramdl, ig
Usage: #ig link_video

7. #igstory
Download video Story user di Instagram
Aliases: storyig
Usage: #igstory username

8. #mediafire
Info dan direct link mediafire.
Aliases: -
Usage: #mediafire link

9. #gdrive
Info dan direct link google drive.
Aliases: googledrive
Usage: #gdrive link

10. #soundcloud
Download soundcloud music.
Aliases: -
Usage: #souncloud link_music

11. #linedl
Download sticker line via link.
Aliases: -
Usage: #linedl link_sticker

12. #cocofun
Download video cocofun.
Aliases: -
Usage: #cocofun link

13. #smule
Download video atau audio smule.
Aliases: -
Usage: #smule link

14. #starmaker
Download video starmaker.
Aliases: -
Usage: #starmaker link

15. #teledl
Download sticker Telegram via Link..
Aliases: -
Usage: #teledl link

16. #pindl
Download file pinterest via Link..
Aliases: -
Usage: #pindl link

17. #zippyshare
Info dan direct link zippyshare.
Aliases: -
Usage: #zippyshare link
    
    `
}

exports.menuText = (prefix) => {
    return `
*TEKS MAKER*
- #blackpink
- #retro
- #neon
- #greenneon
- #glitch
- #pornhub
- #pubg
- #battlefield
- #coffecup
- #glow
- #hartatahta
- #burnpaper
- #angelwing
- #firewing
- #neondevil
- #papercut
- #sand
- #sand2
- #thunder
- #1917

Next features son~
    `
}

exports.menuPremi = (prefix) => {
    return `
── 「 PREMIUM 」 ──
Halo premium users ヽ(・∀・)ﾉ!

1. #tiktoknowm
Download Tiktok video tanpa WM.
Aliases: tktoknowm
Usage: #tiktoknowm link_video

2. #stickerwm
Buat stiker dengan WM.
Aliases: stcwm
Usage: Kirim gambar dengan caption #stickerwm pack_name | author_name atau reply gambar dengan caption #stickerwm pack_name | author_name.

3. #takestick
Merubah watermark sticker.
Aliases: -
Usage: Reply stiker dengan caption #takestick pack_name | author_name

4. #asupan
Asupan video cewek-cewek.
Aliases: -
Usage: #asupan

5. #multilewds
Mengirim up to 5 anime lewd pics.
Aliases: multilewds multilewd mlewd mlewds
Usage: #multilewds

6. #nhdl
Mendownload doujin dari nHentai sebagai file PDF.
Aliases: -
Usage: #nhdl kode

7. #nekosearch
Nekopoi search.
Aliases: -
Usage: #nekosearch query

8. #multifetish
Mengirim up to 5 fetish pics.
Aliases: mfetish
Usage: #multifetish <ecchi/lewdanimegirls/hentai/hentaifemdom/hentaiparadise/hentai4everyone/animearmpits/animefeets/animethighss/animebooty/biganimetiddies/animebellybutton/sideoppai/ahegao/hentaianal/anal/pussy/animepussy/yaoi/yuri/hentaiblowjob/blowjob/futanari/kitsunehentai/midriffhentai/erohentai/cumhentai/paizuri>


9. #brainly
Mencari Jawaban dari Source Brainly
Aliases: -
Usage: #brainly pertanyaan

10. #brainlysearch
Mencari result brainly.
Aliases: -
Usage: #brainlysearch pertanyaan

11. #spamcall
Spam call.
Aliases: -
Usage: #spamcall 812xxxxxxxx

12. #bokep
Mengirim random bokep.
Aliases: randombokep
Usage: #bokep

13. #pinterest
Mengirim gambar source pinterest.
Aliases: -
Usage: #pinterest query

14. #ytmp3
Download YouTube audio.
Aliases: -
Usage: #ytmp3 link

15. #ytmp4
Download YouTube video.
Aliases: -
Usage: #ytmp4 link

16. #oadd
Menambah user ke dalam group.
Aliases: -
Usage: #oadd 628xxxxxxxxxx

17. #okick
Mengeluarkan member dari grup.
Aliases: -
Usage: #okick @member1

18. #opromote
Promote member menjadi admin.
Aliases: -
Usage: #opromote @member1

19. #odemote
Demote member dari admin.
Aliases: -
Usage: #odemote @member1

20. #oleave
Bot akan meninggalkan grup.
Aliases: -
Usage: #oleave

21. #otagall
Mention semua member group.
Aliases: -
Usage: #otagall

22. #odelete
Hapus pesan dari bot.
Aliases: odel
Usage: Reply pesan yang dihapus dengan caption #odelete.

23. #spamsms
Spam OTP SMS.
Aliases: -
Usage: #spamsms 0812xxxxxxxx 

24. #googleimg
Search gambar source google.com.
Aliases: -
Usage: #googleimg query

25. #getmusic
Mengambil music dari database list.
Aliases: -
Usage: Reply pesan bot yg berisikan data audio dan command #getvideo angka

26. #delvn
Menghapus vn dari database bot.
Aliases: -
Usage: #delvn query

27. #getvideo
Mengambil Video dari database list.
Aliases: -
Usage: Reply pesan yg berisikan data video dan gunakan #getvideo angka

28. #delsticker
Menghapus sticker dari database bot.
Aliases: -
Usage: #delsticker query

29. #addimage
Menambah image ke database bot.
Aliases: -
Usage: Reply/kirim image beriringan dengan command #imagesticker query

30. #delimage
Menghapus image dari database bot.
Aliases: -
Usage: #delsticker query

31. #addrespon
Menambah respon ke database bot.
Aliases: -
Usage: #addrespon query | responnya

32. #delrespon
Menghapus respon dari database bot.
Aliases: -
Usage: #delrespon query

33. #addcmd
Custom add cmd untuk sticker.
Aliases: -
Usage: reply sticker dengan command #addcmd cmdnya

34. #delcmd
Custom delete cmd untuk sticker.
Aliases: -
Usage: reply sticker dengan command #delcmd cmdnya
`
}

exports.menuSticker = (prefix) => {
    return `
┌───「 STICKER NENU 」
│
│❏ #sticker
│❏ #stickergif
│❏ #ttg [teks]
│❏ #stickertoimg
│❏ #emojisticker
│❏ #findsticker
│❏ #stickermeme[teks1 | teks2]
│❏ #ttp [teks]
│❏ #nimestick
│❏ #patrik
│❏ #doge
│❏ #bucinstick
│❏ #gurastick
│❏ #stickernobg
│❏ #ttp2 [teks]
│❏ #ttp3 [teks]
│❏ #attp [teks]
│❏ #sfire
│❏ #circle
    `
}

exports.menuWeeaboo = (prefix) => {
    return `
┌───「 anime menu 」
│
│❏ #neko
│❏ #wallpapersearch [pencarian]
│❏ #bts
│❏ #exo
│❏ #ngif
│❏ #pictblackpink
│❏ #foxgirl
│❏ #wallpaper
│❏ #kemono
│❏ #kusonime
│❏ #sagiri 
│❏ #randomkiss
│❏ #randomcry
│❏ #randomhug
│❏ #kusonimedl[link]
│❏ #wait
│❏ #source
│❏ #waifu
│❏ #otakudesu
│❏ #anime [pencarian]
│❏ #otakudesudl [link]
│❏ #husbu
│❏ #manga [judul]
│❏ #loli
│❏ #elf
│❏ #shinobu
│❏ #megumin
│❏ #shota
│❏ #fanart
│❏ #pixivsearch [pencarian]
│❏ #genshininfo [nama genshin]
│❏ #quotesnime
│❏ #konachan [pencarian]

    `
}

exports.menuFun = (prefix) => {
    return `
┌───「 FUN MENU 」
│❏ #partner
│❏ #tictactoe 
│❏ #zodiac
│❏ #pasangan 
│❏ #nulis(masih ngebug)
│❏ #simi [teks]
│❏ #tod
│❏ #weton [tanggal | bulan]
│❏ #citacita
│❏ #readmore [teks1 | teks2]
│❏ #reminder [waktu | pesan]
│❏ #purba [teks]
│❏ #toxic
│❏ #motivasi
│❏ #afk [alasan]
│❏ #kbbi [pencarian]
│❏ #say [teks]
│❏ #meme
│❏ #memeindo
│❏ #darkjoke
│❏ #caklontong
│❏ #univ [pencarian]
│❏ #ganteng
│❏ #Sange
│❏ #babi
│❏ #cerpen
│❏ #puisi
│❏ #email
│❏ #tebakbendera
│❏ #jamdunia
│❏ #fckmylife
│❏ #nickepep
│❏ #tebakgambar
│❏ #family100
│❏ #alay [teks]
│❏ #hilih [teks]
│❏ #bucin
│❏ #katabijak
│❏ #bapakfont
│❏ #artinama [nama]
│❏ #joke
│❏ #creepyfact
│❏ #jumlahhuruf [teks]
│❏ #balikhuruf [teks]
│❏ #howgay [namq]
│❏ #whipped [nama]
│❏ #hidetag [teks]
│❏ #onecak
│❏ #ramaljadian [tanggal|bulan]
│❏ #fakename
│❏ #namaninja[nama]
    `
}

exports.menuImage = (prefix) => {
    return `
┌───「 EFEK MENU 」
│❏ #phcomment [nama | teks]
│❏ #triggered [reply gambarnya]
│❏ #kiss [reply gambarnya]
│❏ #tadikamesra [reply gambarnya]
│❏ #searchcustom [pencarian]
│❏ #custom[reply gambarnya dan costumnya]
│ contoh: reply gambarnya dulu trs kasih caption
│ #costum pdip
│❏ #wasted [reply gambar]
│❏ #gay [reply gambarnya]
│❏ #beautiful[reply gambarnya]
│❏ #hitler [reply gambarnya]
│❏ #trash [reply gambarnya]
│❏ #spank[reply gambarnya]
│❏ #threats[reply gambarnya]
│❏ #glass[reply gambarnya]
│❏ #greyscale[reply gambarnya]
│❏ #invert[reply gambarnya]
│❏ #invertgrey[reply gambarnya]
│❏ #brightness [reply gambarnya]
│❏ #threshold [reply gambarnya]
│❏ #buriq [reply gambarnya]
│❏ #deepfry [reply gambarnya]
│❏ #magik [reply gambarnya]
│❏ #chaptcha [reply gambarnya]
│❏ #gta [reply gambarnya]
│❏ #ytcomment [nama | teks]
│❏ #fisheye [reply gambarnya]
│❏ #pencil [reply gambarnya]
│❏ #jail [reply gambarnya]
    `
}

exports.menuKerang = (prefix) => {
    return `
*── 「 KERANG 」 ──*

1. *${prefix}kapankah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}kapankah* text

2. *${prefix}bisakah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}bisakah* text

3. *${prefix}rate*
Mengambil jawaban random dari bot
Aliases: nilai
Usage: *${prefix}rate* pertanyaan


    `
}

exports.menuModeration = (prefix) => {
    return `
── 「 MODERATION GROUP 」 ──

1. #add
Menambah user ke dalam group.
Aliases: -
Usage: #add 628xxxxxxxxxx

2. #kick
Mengeluarkan member dari grup.
Aliases: -
Usage: #kick @member1

3. #promote
Promote member menjadi admin.
Aliases: -
Usage: #promote @member1

4. #demote
Demote member dari admin.
Aliases: -
Usage: #demote @member1

5. #leave
Bot akan meninggalkan grup.
Aliases: -
Usage: #leave

6. #tagall
Mention semua member group.
Aliases: everyone
Usage: #tagall

7. #nsfw
Mematikan/menyalakan mode NSFW.
Aliases: -
Usage: #nsfw enable/disable

8. #groupicon
Mengganti icon grup.
Aliases: -
Usage: Kirim gambar dengan caption #groupicon atau reply gambar dengan caption #groupicon.

9. #antilink
Mematikan/menyalakan fitur anti-group link.
Aliases: -
Usage: #antilink enable/disable

10. #welcome
Mematikan/menyalakan fitur welcome di grup agar menyambut setiap kedatangan member.
Aliases: -
Usage: #welcome enable/disable

11. #autosticker
Mematikan/menyalakan fitur auto-stiker. Setiap foto yang dikirim akan selalu diubah ke stiker.
Aliases: autostiker, autostik
Usage: #autostiker enable/disable

12. #antinsfw
Mematikan/menyalakan fitur anti-NSFW link.
Aliases: -
Usage: #antinsfw enable/disable

13. #group
Mematikan/menyalakan group.
Aliases: -
Usage: #group enable/disable

14. #linkgroup
Cek link invite group.
Aliases: -
Usage: #linkgroup

15. #ownergroup
Memberikan/tag pembuat grup.
Aliases: -
Usage: #ownergrup

16. #mute
Membisukan bot di grup.
Aliases: -
Usage: #mute enable/disable

17. #revoke
Setel ulang link invite group.
Aliases: -
Usage: #revoke

18. #antivirtex
Detector Virtex.
Aliases: -
Usage: #antivirtex enable/disable
   `
}


exports.menuNsfw = (prefix) => {
    return `

┌───「 NSFW MENU 」
│❏ #lewds
│❏ #nhentai [kode]
│❏ #nekoinfo [link]
│❏ #waifu18
│❏ #fetish
│❏ #xhamstersearch [link]
│❏ #lewdavatar
│❏ #femdom
│❏ #xnxxsearch [pencarian]
│❏ #cersex
│❏ #lewdholo
│❏ #ecchi
│❏ #xnxxdl [link]
│❏ #xhamsterdl [link]
    `
}

exports.menuOwner = (prefix) => {
    return `
*── 「 OWNER MENU 」 ──*
Halo Owner-sama ヽ(・∀・)ﾉ!

1. *${prefix}bc*
Membuat broadcast.
Aliases: -
Usage: *${prefix}bc* <teks> 

2. *${prefix}clearall*
Menghapus semua chat di akun bot.
Aliases: -
Usage: *${prefix}clearall*

3. *${prefix}ban*
Menambah/menghapus user yang diban.
Aliases: -
Usage: *${prefix}ban* add/del 62812xxxxxxxx

4. *${prefix}leaveall*
Keluar dari semua grup.
Aliases: -
Usage: *${prefix}leaveall*

5. *>*
Evaluate kode JavaScript.
Aliases: -
Usage: *>* kode eval

6. *${prefix}shutdown*
Men-shutdown bot.
Aliases: -
Usage: *${prefix}shutdown*

7. *${prefix}premium*
Menambah/menghapus user premium.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}premium* add/del 62812xxxxxxxx 30d

8. *${prefix}setstatus*
Mengganti status about me.
Aliases: *setstats setstat*
Usage: *${prefix}status* teks

9. *${prefix}exif*
Atur WM stiker bot.
Aliases: -
Usage: *${prefix}exif* pack_name | author_name

10. *${prefix}join*
Join grup via link.
Aliases: -
Usage: *${prefix}join* link_group

11. *${prefix}setname*
Mengganti status nama.
Aliases: *setnama*
Usage: *${prefix}setnama* teks

12. *${prefix}give*
Give Level ke member.
Aliases: -
Usage: *${prefix}give* 62812xxxx  jumlah_xp

13. *${prefix}addupdate*
Nambah list update bot.
Aliases: -
Usage: *${prefix}addupdate* query

14. *${prefix}sewa*
Menambah/menghapus group sewa.
*s* - detik
*m* - menit
*h* - jam
*d* - hari
Aliases: -
Usage: *${prefix}sewa* add/del 30d.

15. *${prefix}reset*
Reset database bot.
Aliases: -
Usage: *${prefix}reset*
   `
}

exports.menuLeveling = (prefix) => {
    return `
── 「 LEVELING 」 ──*

1. *${prefix}level*
Untuk melihat level kamu.
Aliases: -
Usage: *${prefix}level*

2. *${prefix}leaderboard*
Untuk melihat leaderboard.
Aliaases: -
Usage: *${prefix}leaderboard*

3. *${prefix}limit*
Cek Limit Kamu.
Aliases: *ceklimit*
Usage: *${prefix}limit*

4. *${prefix}dadu*
Bot akan mengirim dadu dan dapatkan sejumlah Xp.
Aliases: -
Usage: *${prefix}dadu*

5. *${prefix}slot*
Game Slot hadiah Xp.
Aliases: -
Usage: *${prefix}slot*

6. *${prefix}suit*
Bot akan mengirim suit dan dapatkan sejumlah Xp.
Aliases: -
Usage: *${prefix}suit*

7. *${prefix}balance*
Cek Uang Kamu.
Aliases: *atm*, *bal*, *uangku*
Usage: *${prefix}balance*

8. *${prefix}buylimit*
Beli Limit Kamu.
Aliases: *-*
Usage: *${prefix}buylimit* jumlah limit

9. *${prefix}buyglimit*
Beli Limit Game Kamu.
Aliases: *-*
Usage: *${prefix}buyglimit* jumlah limit
    `
}

exports.menuPrimbon = (prefix) => {
    return `
┌┌───「 Ramal Menu 」
│❏ #artinama [nama]
│❏ #artimimpi [mimpi]
│❏ #jodoh [nama1|nama2]
│❏ #ramaljadian [tanggal|bulan|tahun]
│❏ #weton [tanggal|bulan|tahun]
│❏ #zodiak [zodiak]
    `
}

exports.menuPray = (prefix) => {
    return `
┌───「 Pray Menu 」
│
│❏ #listsurah
│❏ #surah [nomor surah]
│❏ #js [daerah]
│❏ #alkitab [nama injil]
│❏ #hadis nama no_hadis
│❏ #kisahnabi [nama nabi]
│❏ #asmaulhusna
│❏ #randomquran
│❏ #alquranaudio [nomor surah]
│❏ #renungharian 
│❏ #alkitabharian
    `
}

exports.menuMisc = (prefix) => {
    return `
┌───「 Media menu 」
│
│❏ #lirik [lagu]
│❏ #shortlink [link]
│❏ #wikipedia [pencarian]
│❏ #igstalk [username]
│❏ #gsmarena [nama hp]
│❏ #receipt [makanan]
│❏ #ytsearch [pencarian]
│❏ #tts [kode bahasa| teks]
│❏ #distance [ kota asal | kota tujuan]
│❏ #math
│ [contoh sumbol]
│ * = Perkalian
│ + = Pertambahan
│ - = Pengurangan
│ / = Pembagian
│ Contoh: #math 2*3
│❏ #mutual
│❏ #whois [ip]
│❏ #play [lagu]
│❏ #linesticker
│❏ #cekongkir [kurir | asak | asak]
│❏ #movie [judul]
│❏ #imagetourl [reply gambarnya]
│❏ #infohoax
│❏ #trending [nama negara]
│❏ #jobseek
│❏ #fakta
│❏ #quotes
│❏ #jadwalbola
│❏ #berita
│❏ #pantun
│❏ #cat
│❏ #pict [pencarian]
│❏ #cuaca [daerah]
│❏ #tiktokhastag [username]
│❏ #infoalamat [alamat]
│❏ #gitstalk [username]
│❏ #happymod [aplikasi]
│❏ #moddroid [aplikasi]
│❏ #corona [daerah]
│❏ #wikien [pencarian]
│❏ #tiktokstalk [username]
│❏ #shortlink2 [link]
│❏ #shortlink3 [link]
│❏ #kurs [mata uang]
│❏ #readqr [reply qr]
│❏ #wpsearch [pencarian]
│❏ #wattpadsearch [judul]
│❏ #wattpadinfo [link]
│❏ #twtstalk [username]
│❏ #google [pencarian]
│❏ #freepik [pencarian]
│❏ #translate [teks | kode bahasa]
│❏ #dogfact
│❏ #catfact
│❏ #pandafact
│❏ #foxfact
│❏ #birdfact
│❏ {prefix}koalafact
│❏ *#racoonfact
│❏ #kangaroofact
│❏ #kelpersegi [angka]
│❏ #luaspersegib [angka]
│❏ #kuadrat [angka]
│❏ #kubik [angka]
│❏ #apkpure [aplikasi]
│❏ #chord [judul lagu]
│❏ #jadwaltv [channel]
│❏ #qrmaker [teks]
│❏ #colourviewer [kode hex]
│❏ #rgbtohex [kode rgb]
│❏ #hextorgb [kode rgb]
│❏ #texttobinary [teks]
│❏ #binarytotext [teks]
│❏ #base64totext [base64 format]
│❏ #texttobase64 [teks]
│❏ #ccgenerator
│❏ #playmp4 [lagu]
│❏ #imagetopdf [reply gambarnya]
│❏ #ssweb [link]
│❏ #jadwaltvnow [channel]
│❏ #liststicker
│❏ #listvn
│❏ #listimage
│❏ #getimage [name image]
│❏ #listrespon
│❏ #shortlink4 [link]
│❏ #shortlink5 [link]
│❏ #ytstalk [channel yt]
    `
}

exports.menuBot = (prefix) => {
    return `
*── 「 BOT STAT 」 ──*
    `
}

exports.menuPrice = (owner, pushname) => {
    return `
*── 「 PRICE LIST 」 ──*
 
*Hai kak  ${pushname}*
*Harga Sewa Bot*
*15K/Group Selama 1 Bulan*

*Pembayaran Bisa Melalui Metode Pembayaran di Bawah:*
*OVO/Dana/Gopay = ${owner}*
*QRis yang dilampirkan*
*PAYPAL = rashidsiregar28@gmail.com*

*_note_*:
*Jika kalian ingin menjadi owner bot,bisa chat owner untuk price nya :D*
*wa.me/${owner} (Owner)*

    `
}

exports.UpToPremi = (ownerNumber, prefix) => {
    return `
*── 「 UPGRADE PREMIUM 」 ──*

*Tarif Premium User adalah 10K Perbulan*
*Keuntungan Premium Diantaranya:*
♲ *Bebas memakai fitur premium*
♲ *Dapat Informasi Lebih dulu akan Update, Nomor Bot Baru (Jika Terbanned), dan Lainnya*

*Jika Tertarik,Kalian Bisa Bayar Melalui Metode Pembayaran di Bawah:*
*OVO/Dana/Gopay = ${ownerNumber}*
*Qris pada gambar diatas*

*Info Lebih Lengkap Chat Owner, Ketik ${prefix}owner
*_note_*:
*Pembelian Premium yang disertai SewaBot hanya akan membayar 20K (Diskon 5K)*

    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Kalian bisa mendukung NotBot untuk update terus dengan cara donasi:
081313185254 (OVO/Telkomsel/GoPay)


Arigato~

Contact Owner:
wa.me/${ownerNumber} (Owner)

Thanks!
    `
}
