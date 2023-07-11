import {Entity} from './entity';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Trending extends Entity, Parsable {
    /**
     * The lastModifiedDateTime property
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Used for navigating to the trending document.
     */
    resource?: Entity | undefined;
    /**
     * Reference properties of the trending document, such as the url and type of the document.
     */
    resourceReference?: ResourceReference | undefined;
    /**
     * Properties that you can use to visualize the document in your experience.
     */
    resourceVisualization?: ResourceVisualization | undefined;
    /**
     * Value indicating how much the document is currently trending. The larger the number, the more the document is currently trending around the user (the more relevant it is). Returned documents are sorted by this value.
     */
    weight?: number | undefined;
}
