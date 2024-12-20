import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'
import collect from 'collect.js'

type Item = {
  id: string
  description: string
  quantity: number
  price: number
  amount: number
}

type TInvoiceContextProps = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  address: string
  setAddress: React.Dispatch<React.SetStateAction<string>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  phone: string
  setPhone: React.Dispatch<React.SetStateAction<string>>
  bankName: string
  setBankName: React.Dispatch<React.SetStateAction<string>>
  bankAccount: string
  setBankAccount: React.Dispatch<React.SetStateAction<string>>
  website: string
  setWebsite: React.Dispatch<React.SetStateAction<string>>
  clientName: string
  setClientName: React.Dispatch<React.SetStateAction<string>>
  clientAddress: string
  setClientAddress: React.Dispatch<React.SetStateAction<string>>
  invoiceNumber: string
  setInvoiceNumber: React.Dispatch<React.SetStateAction<string>>
  invoiceDate: string
  setInvoiceDate: React.Dispatch<React.SetStateAction<string>>
  dueDate: string
  setDueDate: React.Dispatch<React.SetStateAction<string>>
  notes: string
  setNotes: React.Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
  quantity: number
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  price: number
  setPrice: React.Dispatch<React.SetStateAction<number>>
  amount: number
  setAmount: React.Dispatch<React.SetStateAction<number>>
  list: Item[]
  setList: React.Dispatch<React.SetStateAction<Item[]>>
  total: number
  setTotal: React.Dispatch<React.SetStateAction<number>>
  width: number
  componentRef: React.RefObject<HTMLDivElement | null>
  handlePrint: () => void
  isEditing: boolean
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  editRow: (id: string) => void
  deleteRow: (id: string) => void
  showLogoutModal: boolean
  setShowLogoutModal: React.Dispatch<React.SetStateAction<boolean>>
  taxRate: number
  setTaxRate: React.Dispatch<React.SetStateAction<number>>
  taxAmount: number
  setTaxAmount: React.Dispatch<React.SetStateAction<number>>
  isTaxEnabled: boolean
  setIsTaxEnabled: React.Dispatch<React.SetStateAction<boolean>>
  logo: string | null
  setLogo: React.Dispatch<React.SetStateAction<string | null>>
  handleLogoChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  currency: string
  setCurrency: React.Dispatch<React.SetStateAction<string>>
  isDragging: boolean
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  handleDragLeave: () => void
}

const InvoiceContext = createContext<TInvoiceContextProps | undefined>(undefined)

export const InvoiceProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const [name, setName] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [bankName, setBankName] = useState<string>('')
  const [bankAccount, setBankAccount] = useState<string>('')
  const [website, setWebsite] = useState<string>('')
  const [clientName, setClientName] = useState<string>('')
  const [clientAddress, setClientAddress] = useState<string>('')
  const [invoiceNumber, setInvoiceNumber] = useState<string>('')
  const [invoiceDate, setInvoiceDate] = useState<string>('')
  const [dueDate, setDueDate] = useState<string>('')
  const [notes, setNotes] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)
  const [list, setList] = useState<Item[]>([])
  const [isTaxEnabled, setIsTaxEnabled] = useState(false)
  const [taxRate, setTaxRate] = useState<number>(0)
  const [taxAmount, setTaxAmount] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)
  const [width] = useState<number>(641)
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false)
  const [logo, setLogo] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [currency, setCurrency] = useState('USD')

  const componentRef = useRef<HTMLDivElement>(null)

  const handlePrint = () => {
    window.print()
  }

  useEffect(() => {
    if (window.innerWidth < width) {
      alert('Place your phone in landscape mode for the best experience')
    }
  }, [width])

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!description || !quantity || !price) {
        toast.error('Please fill in all inputs')
      } else {
        const newItems: Item = {
          id: uuidv4(),
          description,
          quantity,
          price,
          amount,
        }
        setDescription('')
        setQuantity(0)
        setPrice(0)
        setAmount(0)
        setList([...list, newItems])
        setIsEditing(false)
        console.log(list)
      }
    },
    [amount, description, list, price, quantity]
  )

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const file = target.files?.[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setLogo(reader.result as string)
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setLogo(reader.result)
      }
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    const calculateAmount = () => {
      setAmount(quantity * price)
    }

    calculateAmount()
  }, [quantity, price])

  const calculateTotal = useCallback(() => {
    const allItems = list.map((item) => item.price * item.quantity)
    const subtotal = Number(collect(allItems).sum())
    const taxAmount = isTaxEnabled ? (subtotal * taxRate) / 100 : 0
    setTaxAmount(taxAmount)
    setTotal(subtotal + taxAmount)
  }, [list, taxRate, isTaxEnabled])

  useEffect(() => {
    calculateTotal()
  }, [list, calculateTotal])

  const editRow = useCallback(
    (id: string) => {
      const editingRow = list.find((row) => row.id === id)
      if (editingRow) {
        setList(list.filter((row) => row.id !== id))
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setPrice(editingRow.price)
      }
    },
    [list]
  )

  const deleteRow = useCallback(
    (id: string) => {
      setList(list.filter((row) => row.id !== id))
      setShowModal(false)
    },
    [list]
  )

  const value = useMemo<TInvoiceContextProps>(
    () => ({
      name,
      setName,
      address,
      setAddress,
      email,
      setEmail,
      phone,
      setPhone,
      bankName,
      setBankName,
      bankAccount,
      setBankAccount,
      website,
      setWebsite,
      clientName,
      setClientName,
      clientAddress,
      setClientAddress,
      invoiceNumber,
      setInvoiceNumber,
      invoiceDate,
      setInvoiceDate,
      dueDate,
      setDueDate,
      notes,
      setNotes,
      description,
      setDescription,
      quantity,
      setQuantity,
      price,
      setPrice,
      amount,
      setAmount,
      list,
      setList,
      total,
      setTotal,
      width,
      componentRef,
      handlePrint,
      isEditing,
      setIsEditing,
      showModal,
      setShowModal,
      handleSubmit,
      editRow,
      deleteRow,
      showLogoutModal,
      setShowLogoutModal,
      taxRate,
      setTaxRate,
      taxAmount,
      setTaxAmount,
      isTaxEnabled,
      setIsTaxEnabled,
      logo,
      setLogo,
      handleLogoChange,
      currency,
      setCurrency,
      isDragging,
      setIsDragging,
      handleDrop,
      handleDragOver,
      handleDragLeave,
    }),
    [
      address,
      amount,
      bankAccount,
      bankName,
      clientAddress,
      clientName,
      deleteRow,
      description,
      dueDate,
      editRow,
      email,
      handleSubmit,
      invoiceDate,
      invoiceNumber,
      isEditing,
      list,
      name,
      notes,
      phone,
      price,
      quantity,
      showLogoutModal,
      showModal,
      total,
      website,
      width,
      isTaxEnabled,
      taxRate,
      taxAmount,
      logo,
      currency,
      isDragging,
    ]
  )

  return <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
}

export const useInvoiceContext = () => {
  const context = useContext(InvoiceContext)
  if (!context) {
    throw new Error('useModalContext must be used within a ThemeProvider')
  }
  return context
}
