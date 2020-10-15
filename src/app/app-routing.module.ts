import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'details/:id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'list/:id',
    data: { 
      home: { // A CHANGER !!
        title: 'Choisissez vos produits',
        slogan: '',
        elements: [
          { label: 'De la Brise', url: 'delabrise'}, 
          { label: 'Aquilon', url: 'aquilon' },
          { label: 'Gast Micher',  url: 'gastmicher' },
          { label: 'Saphir', url: 'saphir' },
          { label: 'Contact', url: 'contact' },
          { label: 'Contact', url: 'contact' }
        ]
      },
      products: {
        title: 'Choisissez vos produits',
        slogan: '',
        elements: [
          { label: 'De la Brise', url: 'delabrise'}, 
          { label: 'Aquilon', url: 'aquilon' },
          { label: 'Gast Micher',  url: 'gastmicher' },
          { label: 'Saphir', url: 'saphir' },
          { label: 'Contact', url: 'contact' },
          { label: 'Contact', url: 'contact' }
        ]
      },
      boats: {
        title: 'Bateaux Partenaires',
        slogan: 'Toutes les eaux mènent à Thibault.',
        elements: [
          { label: 'De la Brise', url: 'delabrise'}, 
          { label: 'Aquilon', url: 'aquilon' },
          { label: 'Gast Micher',  url: 'gastmicher' },
          { label: 'Saphir', url: 'saphir' },
          { label: 'Contact', url: 'contact' },
          { label: 'Contact', url: 'contact' }
        ]
      },
      restaurants: {
        title: 'Restaurants Partenaires',
        slogan: 'Tous les restaurants partenaires avec le bateau de Thibault.',
        elements: [
          { label: 'Bistrot des Gascons', url: 'bistrotdesgascons' },
          { label: 'Les fous de l\'île', url: 'lesfousdelile' },
          { label: 'Bistrot Landais', url: 'bistrotlandais' },
          { label: 'Villa 9-Trois', url: 'villa9-trois' },
          { label: 'Bistrot du Sommelier', url: 'bistrotdusommelier' },
          { label: 'Devenez Partenaire', url: 'devenezpartenaire' }
        ]
      },
      recipes: {
        title: 'Nos Recettes',
        slogan: 'Toutes les recettes du bateau de Thibault.',
        elements: [
          { label: 'Homard', url: 'homard' },
          { label: 'St Jacques', url: 'stjacques' },
          { label: 'Bar', url: 'bar' },
          { label: 'Tourteau', url: 'tourteau' },
          { label: 'Recette', url: 'recette' },
          { label: 'Recette', url: 'recette' }
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
