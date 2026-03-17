          {/* RIGHT SECTION - Unchanged */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2 w-full"
          >
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundImage:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="code-panel bg-linear-to-b from-cyan-950/10 to-gray-950/20 shadow-lg overflow-hidden rounded-3xl w-full max-w-md">
                <div className="code-header flex items-center gap-1 px-4 py-3 border-b border-slate-700/30">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 text-sm font-medium text-slate-300">
                    Abu Hurayra.terminal
                  </span>
                </div>

                <div className="space-y-4 p-5">
                  <div className="space-y-1  text-left p-4 rounded-2xl text-sm leading-relaxed text-slate-400">
                    <p className="text-emerald-200">~ $ whoami</p>
                    <p>abuhurara</p>
                    <p className="text-emerald-200">~ $ cat about.json</p>
                    <p className="text-lg text-red-400">{" { "}</p>
                    <p>
                      <span>"role": </span> {'"Full Stack Developer",'}
                    </p>
                    <p>
                      {
                        '  "likes":   ["JavaScript", "mern stack", "next js", "python" ]'
                      }
                    </p>
                    <p className="text-2xl text-red-400">{" } "}</p>
                    <p className="text-emerald-200 flex gap-2 items-center">
                      ~ $ ping me{" "}
                      <span className="w-1 h-4 bg-emerald-200 animate-pulse"></span>
                    </p>
                    <p>
                      <span>email: </span>{" "}
                      <span className="underline break-all">
                        "abuhuraira3912l@gmail.com"
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Button>
          </motion.div>



          <!-- 
I’m Anil Kumar Das, a Full Stack Developer with 2 years of experience. I specialize in both front-end and back-end development, working with technologies like HTML, CSS, JavaScript, and React.js for building responsive user interfaces. On the back end, I use Node.js, Express.js, and Java with Spring, Spring Boot, and Hibernate, along with databases like MySQL and MongoDB. I’m passionate about creating efficient and scalable solutions, and I keep up-to-date with the latest trends and technologies. I look forward to bringing my skills and enthusiasm to new challenges.

Thank you for your time -->