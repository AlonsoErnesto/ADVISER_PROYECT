'use client';

import { useState } from 'react';

import ThemeToggle from '@/components/ThemeToggle';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Label,
  Progress,
  Separator,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';

export default function ComponentShowcase() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="container mx-auto p-8 space-y-8 dark:bg-background dark:text-foreground">
      {/* --- Paleta de colores --- */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Paleta de Colores</h2>
        <div className="grid grid-cols-5 gap-4 mb-8">
          {/* Primarios */}
          <div className="bg-primary p-6 rounded-lg text-primary-foreground flex flex-col items-center">
            <span>Primary</span>
            <span className="text-sm">#667ae2</span>
          </div>
          <div className="bg-primary/80 p-6 rounded-lg text-primary-foreground flex flex-col items-center">
            <span>Primary/80</span>
          </div>
          <div className="bg-primary/60 p-6 rounded-lg text-primary-foreground flex flex-col items-center">
            <span>Primary/60</span>
          </div>
          <div className="bg-primary/40 p-6 rounded-lg text-primary-foreground flex flex-col items-center">
            <span>Primary/40</span>
          </div>
          <div className="bg-primary/20 p-6 rounded-lg text-primary-foreground flex flex-col items-center">
            <span>Primary/20</span>
          </div>
          {/* Secundarios */}
          <div className="bg-secondary p-6 rounded-lg text-secondary-foreground flex flex-col items-center">
            <span>Secondary</span>
            <span className="text-sm">#a8a4fc</span>
          </div>
          <div className="bg-secondary/80 p-6 rounded-lg text-secondary-foreground flex flex-col items-center">
            <span>Secondary/80</span>
          </div>
          {/* Accent */}
          <div className="bg-accent p-6 rounded-lg text-accent-foreground flex flex-col items-center">
            <span>Accent</span>
            <span className="text-sm">#928ef2</span>
          </div>
          <div className="bg-accent/80 p-6 rounded-lg text-accent-foreground flex flex-col items-center">
            <span>Accent/80</span>
          </div>
          {/* Destructive */}
          <div className="bg-destructive p-6 rounded-lg text-destructive-foreground flex flex-col items-center">
            <span>Destructive</span>
            <span className="text-sm">#ef4444</span>
          </div>
        </div>
        {/* Colores adicionales de tu paleta (azules, teals) */}
        <h3 className="text-xl font-semibold mt-8 mb-4">Escala de Azules</h3>
        <div className="grid grid-cols-5 gap-4">
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
            <div
              key={shade}
              className="p-4 rounded-lg flex flex-col items-center"
              style={{
                backgroundColor: `var(--blue-${shade})`,
                color: shade >= 500 ? 'white' : 'var(--blue-900)',
              }}
            >
              <span>--blue-{shade}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4">Escala de Teals</h3>
        <div className="grid grid-cols-5 gap-4">
          {[50, 100, 200, 300, 400, 500].map((shade) => (
            <div
              key={shade}
              className="p-4 rounded-lg flex flex-col items-center"
              style={{
                backgroundColor: `var(--teal-${shade})`,
                color: shade >= 400 ? 'white' : 'var(--blue-900)',
              }}
            >
              <span>--teal-{shade}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold mt-8 mb-4">Colores para Gráficas</h3>
        <div className="grid grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="p-4 rounded-lg flex flex-col items-center"
              style={{
                backgroundColor: `var(--chart-${num})`,
                color: 'white',
              }}
            >
              <span>--chart-{num}</span>
            </div>
          ))}
        </div>
      </section>
      <Separator />
      {/* --- Tipografía --- */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Tipografía</h2>
        <div className="space-y-2">
          {['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'].map((size) => (
            <p key={size} className={`text-${size}`}>
              Texto {size} - Tamaño de fuente {size}
            </p>
          ))}
        </div>
        <h3 className="text-xl font-semibold mt-8 mb-4">Font Family</h3>
        <div className="space-y-4">
          <p className="font-sans">Fuente Sans (Geist)</p>
          <p className="font-mono">Fuente Mono (Geist Mono)</p>
        </div>
      </section>
      <Separator />
      {/* --- Componentes en Tabs --- */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Componentes</h2>
        <Tabs defaultValue="buttons">
          <TabsList className="mb-4">
            <TabsTrigger value="buttons">Botones</TabsTrigger>
            <TabsTrigger value="cards">Tarjetas</TabsTrigger>
            <TabsTrigger value="forms">Formularios</TabsTrigger>
            <TabsTrigger value="alerts">Alertas</TabsTrigger>
            <TabsTrigger value="avatars">Avatares</TabsTrigger>
          </TabsList>
          <TabsContent value="buttons" className="pt-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Variantes</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Tamaños</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="cards" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tarjeta Simple</CardTitle>
                  <CardDescription>Una descripción básica</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Contenido de la tarjeta</p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/10 border-secondary/30">
                <CardHeader>
                  <CardTitle className="text-secondary-foreground">Tarjeta Secundaria</CardTitle>
                  <CardDescription>Usando colores secundarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-accent/20 p-4 rounded-lg mb-4">
                    <p className="text-accent-foreground">Este es un accent background</p>
                  </div>
                  <Badge variant="secondary">Badge en tarjeta</Badge>
                </CardContent>
              </Card>

              <Card className="border-primary/30">
                <CardHeader className="bg-primary/10 border-b border-primary/20">
                  <CardTitle>Tarjeta con Progreso</CardTitle>
                  <CardDescription>Mostrando progreso de usuario</CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span>Progreso del curso</span>
                      <span>65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card style={{ background: 'var(--teal-50)' }} className="border-teal-200">
                <CardHeader>
                  <CardTitle>Teal Card</CardTitle>
                  <CardDescription>Usando variables de la paleta Teal</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    {[100, 200, 300, 400, 500].map((shade) => (
                      <div
                        key={shade}
                        className="h-8 w-8 rounded-full"
                        style={{ background: `var(--teal-${shade})` }}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="forms" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="ejemplo@dominio.com" className="mt-1" />
                </div>

                <div>
                  <Label htmlFor="password">Contraseña</Label>
                  <Input id="password" type="password" placeholder="••••••••" className="mt-1" />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={checked}
                    onCheckedChange={() => setChecked(!checked)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    Acepto los términos y condiciones
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Modo avión</Label>
                </div>

                <Button className="mt-2 w-full">Enviar</Button>
              </div>

              <div className="space-y-4 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold">Estados de input</h3>

                <div>
                  <Label>Normal</Label>
                  <Input placeholder="Input normal" />
                </div>

                <div>
                  <Label>Disabled</Label>
                  <Input placeholder="Input deshabilitado" disabled />
                </div>

                <div>
                  <Label>Error</Label>
                  <Input
                    placeholder="Input con error"
                    className="border-destructive focus-visible:ring-destructive/50"
                  />
                  <p className="text-destructive text-sm mt-1">Este campo es requerido</p>
                </div>

                <div>
                  <Label>Focus (haz clic aquí)</Label>
                  <Input placeholder="Prueba el focus" className="focus-visible:ring-ring" />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="alerts" className="pt-4">
            <div className="space-y-6">
              <Alert>
                <AlertTitle>Atención</AlertTitle>
                <AlertDescription>Esta es una alerta informativa básica.</AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>Ha ocurrido un error al procesar tu solicitud.</AlertDescription>
              </Alert>

              <Alert className="border-secondary bg-secondary/10">
                <AlertTitle className="text-secondary-foreground">
                  Información secundaria
                </AlertTitle>
                <AlertDescription>
                  Esta alerta utiliza los colores secundarios de tu tema.
                </AlertDescription>
              </Alert>

              <Alert style={{ borderColor: 'var(--teal-300)', background: 'var(--teal-50)' }}>
                <AlertTitle style={{ color: 'var(--teal-500)' }}>Éxito</AlertTitle>
                <AlertDescription>Tu operación se ha completado con éxito.</AlertDescription>
              </Alert>
            </div>
          </TabsContent>
          <TabsContent value="avatars" className="pt-4">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Tamaños</h3>
                <div className="flex gap-4 items-end">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-16 w-16">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Fallbacks con colores de la paleta</h3>
                <div className="flex gap-4">
                  <Avatar className="h-12 w-12 bg-primary text-primary-foreground">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12 bg-secondary text-secondary-foreground">
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12 bg-accent text-accent-foreground">
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12" style={{ background: 'var(--blue-300)' }}>
                    <AvatarFallback>EF</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-12 w-12" style={{ background: 'var(--teal-300)' }}>
                    <AvatarFallback>GH</AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Con badges</h3>
                <div className="flex gap-6">
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                      <AvatarFallback>US</AvatarFallback>
                    </Avatar>
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 rounded-full">
                      3
                    </Badge>
                  </div>

                  <div className="relative">
                    <Avatar className="h-12 w-12 bg-accent text-accent-foreground">
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      {/* --- Estados Interactivos --- */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Estados Interactivos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Hover</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="default" className="w-full hover:bg-primary/90 transition-colors">
                Hover Me
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="secondary"
                className="w-full active:bg-secondary/80 transition-colors"
              >
                Click & Hold
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all"
              >
                Tab to Focus
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* --- Theme Toggle --- */}
      <section className="mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Cambiar Tema</CardTitle>
            <CardDescription>
              Cambia entre modo claro y oscuro para ver las variables
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Label htmlFor="theme-toggle">Modo Oscuro</Label>
              <Switch id="theme-toggle" />
              <ThemeToggle />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Para ver el cambio real, necesitarás conectar este Switch a un estado y lógica de
              cambio de tema.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
