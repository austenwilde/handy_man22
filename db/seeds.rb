Comment.delete_all
Service.delete_all
Worker.delete_all 

5.times do 
  worker = Worker.create(
    title: Faker::Name.name,
    specialty: Faker::Job.field,
    review: Faker::Lorem.paragraph
  )
  3.times do
    service = Service.create(
      name: Faker::Artist.name,
      servicetype: Faker::Job.key_skill,
      location: Faker::Address.city,
      worker_id: worker.id
    )
    5.times do
    Comment.create(
      subject: Faker::Job.field,
      body: Faker::Lorem.paragraph,
      user: Faker::Name.name,
      service_id: service.id
    )


    end
  
  end 
end

puts'seeded'