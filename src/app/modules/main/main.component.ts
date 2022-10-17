import {AppState} from '@/store/state';
import {ToggleSidebarMenu} from '@/store/ui/actions';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit, Renderer2} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    
  
    constructor(private renderer: Renderer2, private store: Store<AppState>) {}

@HostBinding('class') class = 'wrapper';
public ui: Observable<UiState>;


    ngOnInit() {
        this.ui = this.store.select('ui');
        this.renderer.addClass(
            document.querySelector('app-root'),
            'layout-fixed'
        );

        this.ui.subscribe(
            ({menuSidebarCollapsed, controlSidebarCollapsed, darkMode}) => {
                if (menuSidebarCollapsed) {
                    this.renderer.removeClass(
                        document.querySelector('app-root'),
                        'sidebar-collapse'
                    );
                    this.renderer.addClass(
                        document.querySelector('app-root'),
                        'sidebar-open'
                    );
                } else {
                    this.renderer.removeClass(
                        document.querySelector('app-root'),
                        'sidebar-open'
                    );
                    this.renderer.addClass(
                        document.querySelector('app-root'),
                        'sidebar-collapse'
                    );
                }

                if (controlSidebarCollapsed) {
                    this.renderer.removeClass(
                        document.querySelector('app-root'),
                        'control-sidebar-slide-collapse'
                    );
                } else {
                    this.renderer.addClass(
                        document.querySelector('app-root'),
                        'control-sidebar-slide-collapse'
                    );
                }

                if (darkMode) {
                    this.renderer.addClass(
                        document.querySelector('app-root'),
                        'dark-mode'
                    );
                } else {
                    this.renderer.removeClass(
                        document.querySelector('app-root'),
                        'dark-mode'
                    );
                }
            }
        );
    }

    onToggleMenuSidebar() {
        this.store.dispatch(new ToggleSidebarMenu());
    }

    // var myApp = angular.module('myApp',[]);

 MyCtrl($scope) {
    
    $scope.ingredients = [
        {'name': 'potato'},
        {'name': 'tomato'}
    ];
    
    $scope.setSelected = function() {
        $scope.selected = this.ingredient;
        console.log($scope.selected);
    };
    
}
}
