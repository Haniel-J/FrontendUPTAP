import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/reactbits/scroll-based-velocity"

export function ScrollBasedLine() {
  return (
        <section className="relative overflow-hidden py-8">
      {/* Imagen decorativa de fondo */}
      <img
        src="/videos/welcome_img/background1.jpeg"
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          pointer-events-none select-none -z-10"
      />

      <ScrollVelocityContainer className="text-2xl font-mono tracking-[-0.02em] md:text-3xl md:leading-10">
        <ScrollVelocityRow baseVelocity={15} direction={1}>
        INOVACIÓN Y TECNOLOGÍA AL SERVICIO DE LA SOCIEDAD ⭐
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={15} direction={-1}>
        INOVACIÓN Y TECNOLOGÍA AL SERVICIO DE LA SOCIEDAD ⭐
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

     </section>
  )
}
