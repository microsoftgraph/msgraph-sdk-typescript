import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {Entity} from './entity';
import {EntityImpl, ResourceReferenceImpl, ResourceVisualizationImpl} from './index';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {Trending} from './trending';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class TrendingImpl extends EntityImpl implements Parsable, Trending {
    /** The lastModifiedDateTime property */
    public lastModifiedDateTime?: Date | undefined;
    /** Used for navigating to the trending document. */
    public resource?: Entity | undefined;
    /** Reference properties of the trending document, such as the url and type of the document. */
    public resourceReference?: ResourceReference | undefined;
    /** Properties that you can use to visualize the document in your experience. */
    public resourceVisualization?: ResourceVisualization | undefined;
    /** Value indicating how much the document is currently trending. The larger the number, the more the document is currently trending around the user (the more relevant it is). Returned documents are sorted by this value. */
    public weight?: number | undefined;
    /**
     * Instantiates a new trending and sets the default values.
     * @param trendingParameterValue 
     */
    public constructor(trendingParameterValue?: Trending | undefined) {
        super();
        this.lastModifiedDateTime = trendingParameterValue?.lastModifiedDateTime ;
        this.resource = trendingParameterValue?.resource ;
        this.resourceReference = trendingParameterValue?.resourceReference ;
        this.resourceVisualization = trendingParameterValue?.resourceVisualization ;
        this.weight = trendingParameterValue?.weight ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "resource": n => { this.resource = n.getObjectValue<EntityImpl>(createEntityFromDiscriminatorValue); },
            "resourceReference": n => { this.resourceReference = n.getObjectValue<ResourceReferenceImpl>(createResourceReferenceFromDiscriminatorValue); },
            "resourceVisualization": n => { this.resourceVisualization = n.getObjectValue<ResourceVisualizationImpl>(createResourceVisualizationFromDiscriminatorValue); },
            "weight": n => { this.weight = n.getNumberValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.resource){
        writer.writeObjectValue<EntityImpl>("resource", new EntityImpl(this.resource));
        }
        if(this.resourceReference){
        writer.writeObjectValue<ResourceReferenceImpl>("resourceReference", new ResourceReferenceImpl(this.resourceReference));
        }
        if(this.resourceVisualization){
        writer.writeObjectValue<ResourceVisualizationImpl>("resourceVisualization", new ResourceVisualizationImpl(this.resourceVisualization));
        }
        if(this.weight){
        writer.writeNumberValue("weight", this.weight);
        }
    };
}
