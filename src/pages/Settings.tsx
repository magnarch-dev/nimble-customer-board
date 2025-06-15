import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { User, Bell, Shield, CreditCard, Globe, Save, Camera, Key, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const profileSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  specialization: z.string().min(2, 'Specialization is required'),
  bio: z.string().max(500, 'Bio must be less than 500 characters'),
});

const Settings = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: 'Dr. John',
      lastName: 'Smith',
      email: 'dr.smith@clinic.com',
      phone: '+1 (555) 123-4567',
      specialization: 'Internal Medicine',
      bio: 'Experienced internal medicine physician with over 10 years of practice...',
    },
  });

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const settingsNavItems = [
    { id: 'profile', icon: User, label: 'Profile', description: 'Manage your personal information' },
    { id: 'notifications', icon: Bell, label: 'Notifications', description: 'Configure notification preferences' },
    { id: 'security', icon: Shield, label: 'Security', description: 'Password and security settings' },
    { id: 'billing', icon: CreditCard, label: 'Billing', description: 'Subscription and payment methods' },
    { id: 'preferences', icon: Globe, label: 'Preferences', description: 'Language and display settings' },
    { id: 'activity', icon: Activity, label: 'Activity Log', description: 'View recent account activities' },
  ];

  const onSubmit = async (values: z.infer<typeof profileSchema>) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Settings saved",
        description: "Your profile has been updated successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderProfileContent = () => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Profile Picture</CardTitle>
            <CardDescription>Update your profile photo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="" />
                <AvatarFallback className="text-xl font-semibold">JS</AvatarFallback>
              </Avatar>
              <Button variant="outline" className="gap-2 h-10">
                <Camera className="w-4 h-4" />
                Upload Photo
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Personal Information</CardTitle>
            <CardDescription>Update your personal details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">First Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">Last Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-10" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} className="h-10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Phone Number</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="specialization"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Specialization</FormLabel>
                  <FormControl>
                    <Input {...field} className="h-10" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium">Bio</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md focus:ring-2 focus:ring-ring focus:border-transparent resize-none text-sm"
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-muted-foreground">
                    Brief description about yourself (max 500 characters)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      </form>
    </Form>
  );

  const renderNotificationsContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>Manage your email notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-sm font-medium">Appointment Reminders</div>
              <div className="text-sm text-muted-foreground">Get notified about upcoming appointments</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-sm font-medium">Patient Messages</div>
              <div className="text-sm text-muted-foreground">Receive notifications for new patient messages</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-sm font-medium">System Updates</div>
              <div className="text-sm text-muted-foreground">Important system announcements and updates</div>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Push Notifications</CardTitle>
          <CardDescription>Configure browser and mobile notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-sm font-medium">Browser Notifications</div>
              <div className="text-sm text-muted-foreground">Show notifications in your browser</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-sm font-medium">Emergency Alerts</div>
              <div className="text-sm text-muted-foreground">Critical alerts that require immediate attention</div>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecurityContent = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your account password</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Current Password</label>
            <Input type="password" placeholder="Enter current password" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">New Password</label>
            <Input type="password" placeholder="Enter new password" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Confirm New Password</label>
            <Input type="password" placeholder="Confirm new password" />
          </div>
          <Button>Update Password</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>Add an extra layer of security to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="text-sm font-medium">2FA Status</div>
              <div className="text-sm text-muted-foreground">Currently disabled</div>
            </div>
            <Button variant="outline" className="gap-2">
              <Key className="w-4 h-4" />
              Enable 2FA
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Keys</CardTitle>
          <CardDescription>Manage API keys for integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="text-sm font-medium">CRM Integration Key</div>
                <div className="text-sm text-muted-foreground">sk-•••••••••••••••••</div>
              </div>
              <Button variant="outline" size="sm">Regenerate</Button>
            </div>
            <Button className="gap-2">
              <Key className="w-4 h-4" />
              Generate New Key
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return renderProfileContent();
      case 'notifications':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Email Notifications</CardTitle>
                <CardDescription>Manage your email notification preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Appointment Reminders</div>
                    <div className="text-xs text-muted-foreground">Get notified about upcoming appointments</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Patient Messages</div>
                    <div className="text-xs text-muted-foreground">Receive notifications for new patient messages</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">System Updates</div>
                    <div className="text-xs text-muted-foreground">Important system announcements and updates</div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Push Notifications</CardTitle>
                <CardDescription>Configure browser and mobile notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Browser Notifications</div>
                    <div className="text-xs text-muted-foreground">Show notifications in your browser</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Emergency Alerts</div>
                    <div className="text-xs text-muted-foreground">Critical alerts that require immediate attention</div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case 'security':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Change Password</CardTitle>
                <CardDescription>Update your account password</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Current Password</label>
                  <Input type="password" placeholder="Enter current password" className="h-10" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">New Password</label>
                  <Input type="password" placeholder="Enter new password" className="h-10" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                  <Input type="password" placeholder="Confirm new password" className="h-10" />
                </div>
                <Button className="h-10">Update Password</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">2FA Status</div>
                    <div className="text-xs text-muted-foreground">Currently disabled</div>
                  </div>
                  <Button variant="outline" className="gap-2 h-10">
                    <Key className="w-4 h-4" />
                    Enable 2FA
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">API Keys</CardTitle>
                <CardDescription>Manage API keys for integrations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="text-sm font-medium">CRM Integration Key</div>
                      <div className="text-xs text-muted-foreground">sk-•••••••••••••••••</div>
                    </div>
                    <Button variant="outline" size="sm" className="h-8">Regenerate</Button>
                  </div>
                  <Button className="gap-2 h-10">
                    <Key className="w-4 h-4" />
                    Generate New Key
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case 'billing':
        return (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Subscription Plan</CardTitle>
              <CardDescription>Manage your subscription and billing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <div className="font-semibold">Professional Plan</div>
                  <div className="text-muted-foreground">$29/month</div>
                  <div className="text-sm text-muted-foreground mt-1">All features included</div>
                </div>
                <Button className="h-10">Manage Subscription</Button>
              </div>
            </CardContent>
          </Card>
        );
      case 'preferences':
        return (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Display Preferences</CardTitle>
              <CardDescription>Customize your interface</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <div className="text-sm font-medium">Dark Mode</div>
                  <div className="text-xs text-muted-foreground">Switch to dark theme</div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <div className="text-sm font-medium">Compact Mode</div>
                  <div className="text-xs text-muted-foreground">Reduce spacing for more content</div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        );
      case 'activity':
        return (
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Recent Activity</CardTitle>
              <CardDescription>Your account activity log</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-medium">Profile updated</div>
                    <div className="text-xs text-muted-foreground">2 hours ago</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-medium">Login from new device</div>
                    <div className="text-xs text-muted-foreground">1 day ago</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  const getSectionTitle = () => {
    const section = settingsNavItems.find(item => item.id === activeSection);
    return section?.label || 'Settings';
  };

  return (
    <div className="min-h-screen flex w-full" style={{ backgroundColor: '#e4e4e4' }}>
      <Sidebar isCollapsed={sidebarCollapsed} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header onToggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
              <p className="text-muted-foreground">Manage your account preferences and configurations</p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 lg:gap-8">
              {/* Settings Navigation */}
              <div className="xl:col-span-1">
                <Card className="sticky top-6">
                  <CardContent className="p-4">
                    <nav className="space-y-1">
                      {settingsNavItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full flex items-start gap-3 px-3 py-3 text-left rounded-lg transition-all duration-200 hover:bg-accent ${
                            activeSection === item.id
                              ? 'bg-primary text-primary-foreground shadow-sm'
                              : 'text-foreground hover:text-accent-foreground'
                          }`}
                        >
                          <item.icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium truncate">{item.label}</div>
                            <div className={`text-xs truncate mt-0.5 ${
                              activeSection === item.id ? 'text-primary-foreground/80' : 'text-muted-foreground'
                            }`}>
                              {item.description}
                            </div>
                          </div>
                        </button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              </div>

              {/* Settings Content */}
              <div className="xl:col-span-4 min-w-0">
                <div className="space-y-6">
                  <div className="pb-4 border-b">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{getSectionTitle()}</h2>
                    <p className="text-muted-foreground">
                      {settingsNavItems.find(item => item.id === activeSection)?.description}
                    </p>
                  </div>
                  
                  <div className="w-full">
                    {renderContent()}
                  </div>

                  {activeSection === 'profile' && (
                    <div className="flex justify-end pt-6 border-t">
                      <Button 
                        onClick={form.handleSubmit(onSubmit)}
                        disabled={isLoading}
                        className="gap-2 h-10 px-6"
                      >
                        <Save className="w-4 h-4" />
                        {isLoading ? 'Saving...' : 'Save Changes'}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
