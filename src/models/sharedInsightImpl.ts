import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {createSharingDetailFromDiscriminatorValue} from './createSharingDetailFromDiscriminatorValue';
import {Entity} from './entity';
import {EntityImpl, ResourceReferenceImpl, ResourceVisualizationImpl, SharingDetailImpl} from './index';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {SharedInsight} from './sharedInsight';
import {SharingDetail} from './sharingDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class SharedInsightImpl extends EntityImpl implements Parsable, SharedInsight {
    /** Details about the shared item. Read only. */
    public lastShared?: SharingDetail | undefined;
    /** The lastSharedMethod property */
    public lastSharedMethod?: Entity | undefined;
    /** Used for navigating to the item that was shared. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem. */
    public resource?: Entity | undefined;
    /** Reference properties of the shared document, such as the url and type of the document. Read-only */
    public resourceReference?: ResourceReference | undefined;
    /** Properties that you can use to visualize the document in your experience. Read-only */
    public resourceVisualization?: ResourceVisualization | undefined;
    /** The sharingHistory property */
    public sharingHistory?: SharingDetail[] | undefined;
    /**
     * Instantiates a new sharedInsight and sets the default values.
     * @param sharedInsightParameterValue 
     */
    public constructor(sharedInsightParameterValue?: SharedInsight | undefined) {
        super();
        this.lastShared = sharedInsightParameterValue?.lastShared ;
        this.lastSharedMethod = sharedInsightParameterValue?.lastSharedMethod ;
        this.resource = sharedInsightParameterValue?.resource ;
        this.resourceReference = sharedInsightParameterValue?.resourceReference ;
        this.resourceVisualization = sharedInsightParameterValue?.resourceVisualization ;
        this.sharingHistory = sharedInsightParameterValue?.sharingHistory ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lastShared": n => { this.lastShared = n.getObjectValue<SharingDetailImpl>(createSharingDetailFromDiscriminatorValue); },
            "lastSharedMethod": n => { this.lastSharedMethod = n.getObjectValue<EntityImpl>(createEntityFromDiscriminatorValue); },
            "resource": n => { this.resource = n.getObjectValue<EntityImpl>(createEntityFromDiscriminatorValue); },
            "resourceReference": n => { this.resourceReference = n.getObjectValue<ResourceReferenceImpl>(createResourceReferenceFromDiscriminatorValue); },
            "resourceVisualization": n => { this.resourceVisualization = n.getObjectValue<ResourceVisualizationImpl>(createResourceVisualizationFromDiscriminatorValue); },
            "sharingHistory": n => { this.sharingHistory = n.getCollectionOfObjectValues<SharingDetailImpl>(createSharingDetailFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.lastShared){
        writer.writeObjectValue<SharingDetailImpl>("lastShared", new SharingDetailImpl(this.lastShared));
        }
        if(this.lastSharedMethod){
        writer.writeObjectValue<EntityImpl>("lastSharedMethod", new EntityImpl(this.lastSharedMethod));
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
        if(this.sharingHistory && this.sharingHistory.length != 0){        const sharingHistoryArrValue: SharingDetailImpl[] = []; this.sharingHistory?.forEach(element => {sharingHistoryArrValue.push(new SharingDetailImpl(element));});
        writer.writeCollectionOfObjectValues<SharingDetailImpl>("sharingHistory", sharingHistoryArrValue);
        }
    };
}
