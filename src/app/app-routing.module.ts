import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list/products',
    pathMatch: 'full'
  },
  {
    path: 'list/:id',
    data: { 
      products: {
        title: 'Choisissez vos produits',
        slogan: '',
        elements: [
          'Poisson', 
          'St Jacques',
          'Coquillages', 
          'Pieuvre'
        ],
      },
      boats: {
        title: 'Bateaux Partenaires',
        slogan: 'Toutes les eaux mènent à Thibault.',
        elements: [
          'De la Brise', 
          'Aquilon',
          'Gast Micher', 
          'Saphir', 
          'Contact', 
          'Contact'
        ],
      },
      restaurants: {
        title: 'Restaurants Partenaires',
        slogan: 'Tous les restaurants partenaires avec le bateau de Thibault.',
        elements: [
          'Bistrot des Gascons',
          'Les fous de l\'île',
          'Bistrot Landais',
          'Villa 9-Trois',
          'Bistrot du Sommelier',
          'Devenez Parteraine'
        ],
      },
      recipes: {
        title: 'Nos Recettes',
        slogan: 'Toutes les recettes du bateau de Thibault.',
        elements: [
          'Homard',
          'St Jacques',
          'Bar',
          'Tourteau',
          'Recette',
          'Recette'
        ]
      }
    },
    loadChildren: () => import('./list/list.module').then( m => m.FolderPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
