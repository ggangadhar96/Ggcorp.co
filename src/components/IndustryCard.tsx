import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function IndustryCard({ icon: Icon, title, description }: IndustryCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:bg-gray-800/70 border border-gray-700">
      <div className="bg-blue-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}