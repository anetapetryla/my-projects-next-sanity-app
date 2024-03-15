export default function Footer() {
    return (
        <footer className="border-t border-zinc-800 my-3">
        <div className="max-w-7xl mx-auto flex sm:flex-row flex-col items-center lg:justify-between justify-center gap-y-2 gap-x-20 md:px-16 px-90 py-4 text-zinc-400">
          <small className="font-mono">
            All rights reserved &copy; {new Date().getFullYear()}
          </small>
  
          <small className="block">
            Prepared by 
            <a href="https://github.com/anetapetryla"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-500 hover:text-white duration-200 mx-1">Aneta Petryla</a>
          </small>
        </div>
      </footer>
    );
  }