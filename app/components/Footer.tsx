export default function Footer() {
  return (
    <footer className="border-t border-gold/10 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="font-display text-gold text-lg tracking-widest">Dr. Yamamoto Ishikawa</div>
          <div className="font-mono text-xs text-mist/40 tracking-widest uppercase mt-1">
            Cirujano Especialista · Cédula Prof. 12345678
          </div>
        </div>

        <div className="text-center">
          <div className="gold-line w-48 mx-auto mb-4" />
          <p className="font-mono text-[10px] text-mist/40 tracking-widest">
            © {new Date().getFullYear()} Dr. Yamamoto Ishikawa · Todos los derechos reservados
          </p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <a href="mailto:contacto@dryamamoto.mx" className="font-body text-xs text-mist/50 hover:text-gold transition-colors">
            contacto@dryamamoto.mx
          </a>
          <a href="tel:+523312345678" className="font-body text-xs text-mist/50 hover:text-gold transition-colors">
            +52 (33) 1234-5678
          </a>
        </div>
      </div>
    </footer>
  );
}
