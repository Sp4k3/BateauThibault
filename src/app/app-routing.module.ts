import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list/home',
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'list/:id',
    data: { 
      home: { // A CHANGER !!
        title: 'Le Bateau de Thibault',
        slogan: 'Vente en direct de notre bateau. Produits selon la saison, livraisons sur Paris.',
        elements: [
          { label: 'Produits', url: '/list/products'}, 
          { label: 'Bateaux', url: '/list/boats' },
          { label: 'Restaurants', url: '/list/restaurants' },
          { label: 'Recettes',  url: '/list/recipes' },
          { label: 'Contact', url: '/list/contact' }
        ]
      },
      products: {
        title: 'Choisissez vos produits',
        slogan: '',
        elements: [
          { label: 'De la Brise', url: '/details/delabrise'}, 
          { label: 'Aquilon', url: '/details/aquilon' },
          { label: 'Gast Micher',  url: '/details/gastmicher' },
          { label: 'Saphir', url: '/details/saphir' },
          { label: 'Contact', url: '/details/contact' },
          { label: 'Contact', url: '/details/contact' }
        ]
      },
      boats: {
        title: 'Bateaux Partenaires',
        slogan: 'Toutes les eaux mènent à Thibault.',
        elements: [
          { label: 'De la Brise', url: '/details/delabrise'}, 
          { label: 'Aquilon', url: '/details/aquilon' },
          { label: 'Gast Micher',  url: '/details/gastmicher' },
          { label: 'Saphir', url: '/details/saphir' },
          { label: 'Contact', url: '/details/contact' },
          { label: 'Contact', url: '/details/contact' }
        ]
      },
      restaurants: {
        title: 'Restaurants Partenaires',
        slogan: 'Tous les restaurants partenaires avec le bateau de Thibault.',
        elements: [
          { label: 'Bistrot des Gascons', url: '/details/bistrotdesgascons' },
          { label: 'Les fous de l\'île', url: '/details/lesfousdelile' },
          { label: 'Bistrot Landais', url: '/details/bistrotlandais' },
          { label: 'Villa 9-Trois', url: '/details/villa9-trois' },
          { label: 'Bistrot du Sommelier', url: '/details/bistrotdusommelier' },
          { label: 'Devenez Partenaire', url: '/details/devenezpartenaire' }
        ]
      },
      recipes: {
        title: 'Nos Recettes',
        slogan: 'Toutes les recettes du bateau de Thibault.',
        elements: [
          { label: 'Homard', url: '/details/homard' },
          { label: 'St Jacques', url: '/details/stjacques' },
          { label: 'Bar', url: '/details/bar' },
          { label: 'Tourteau', url: '/details/tourteau' },
          { label: 'Recette', url: '/list/recipes' },
          { label: 'Recette', url: '/list/recipes' }
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
