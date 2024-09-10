import cn from 'classnames'

export const MaxWidthWrapper = ({className,children}) => {
  return <div className={cn("h-full w-full mx-auto max-w-screen-xl px-2.5 md:px-20",className)}>
    {children}
  </div>
}

export default MaxWidthWrapper