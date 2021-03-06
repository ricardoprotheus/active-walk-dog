const Database = require('./db')
const createProfessional = require('./createProfessional')

Database.then(async (db) => {

    professional = {
        name: "Douglas Souza",
        avatar: "https://avatars2.githubusercontent.com/u/50157211?s=60&v=4",
        whatsapp: "11988556611",
        bio: "Passionate about animals and everything that involves the universe of pets.",

    }

    take_care = {
        subject: "Dog Walker",
        cost: "15",

    }

    care_schedules = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProfessional(db, {professional, take_care, care_schedules})

    const selectedProfessionals = await db.all("SELECT * FROM professionals")
    //console.log(selectedProfessionals)

    const selectCareAndProfessionals = await db.all(`
        SELECT take_care.*, professionals.*
        FROM professionals
        JOIN take_care ON (take_care.professionals_id = professionals.id)
        WHERE take_care.professionals_id = 1;
    `)
    //console.log(selectCareAndProfessionals)

    constselectCareSchedules  = await db.all(`
        SELECT care_schedule.*
        FROM care_schedule
        WHERE care_schedule.take_care_id = "1"
        AND care_schedule.weekday = "0"
        AND care_schedule.time_from <= "420"
        AND care_schedule.time_to > "1300"
        
    `)
    //console.log(constselectCareSchedules)
})

