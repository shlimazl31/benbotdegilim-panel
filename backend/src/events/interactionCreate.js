export const name = 'interactionCreate'
export const once = false

export async function execute(interaction) {
  if (!interaction.isChatInputCommand()) return

  const command = interaction.client.commands.get(interaction.commandName)

  if (!command) {
    console.error(`${interaction.commandName} komutu bulunamadı.`)
    return
  }

  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ content: 'Komut çalıştırılırken bir hata oluştu!', ephemeral: true })
    } else {
      await interaction.reply({ content: 'Komut çalıştırılırken bir hata oluştu!', ephemeral: true })
    }
  }
} 