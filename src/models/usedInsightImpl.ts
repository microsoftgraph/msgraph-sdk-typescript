import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createResourceReferenceFromDiscriminatorValue} from './createResourceReferenceFromDiscriminatorValue';
import {createResourceVisualizationFromDiscriminatorValue} from './createResourceVisualizationFromDiscriminatorValue';
import {createUsageDetailsFromDiscriminatorValue} from './createUsageDetailsFromDiscriminatorValue';
import {Entity} from './entity';
import {EntityImpl, ResourceReferenceImpl, ResourceVisualizationImpl, UsageDetailsImpl} from './index';
import {ResourceReference} from './resourceReference';
import {ResourceVisualization} from './resourceVisualization';
import {UsageDetails} from './usageDetails';
import {UsedInsight} from './usedInsight';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export class UsedInsightImpl extends EntityImpl implements UsedInsight {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Information about when the item was last viewed or modified by the user. Read only. */
    public lastUsed?: UsageDetails | undefined;
    /** Used for navigating to the item that was used. For file attachments, the type is fileAttachment. For linked attachments, the type is driveItem. */
    public resource?: Entity | undefined;
    /** Reference properties of the used document, such as the url and type of the document. Read-only */
    public resourceReference?: ResourceReference | undefined;
    /** Properties that you can use to visualize the document in your experience. Read-only */
    public resourceVisualization?: ResourceVisualization | undefined;
    /**
     * Instantiates a new usedInsight and sets the default values.
     * @param usedInsightParameterValue 
     */
    public constructor(usedInsightParameterValue?: UsedInsight | undefined) {
        super(usedInsightParameterValue);
        this.additionalData = usedInsightParameterValue?.additionalData ? usedInsightParameterValue?.additionalData! : {};
        this.lastUsed = usedInsightParameterValue?.lastUsed instanceof UsageDetailsImpl? usedInsightParameterValue?.lastUsed:new UsageDetailsImpl(usedInsightParameterValue?.lastUsed);
        this.resource = usedInsightParameterValue?.resource instanceof EntityImpl? usedInsightParameterValue?.resource:new EntityImpl(usedInsightParameterValue?.resource);
        this.resourceReference = usedInsightParameterValue?.resourceReference instanceof ResourceReferenceImpl? usedInsightParameterValue?.resourceReference:new ResourceReferenceImpl(usedInsightParameterValue?.resourceReference);
        this.resourceVisualization = usedInsightParameterValue?.resourceVisualization instanceof ResourceVisualizationImpl? usedInsightParameterValue?.resourceVisualization:new ResourceVisualizationImpl(usedInsightParameterValue?.resourceVisualization);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "lastUsed": n => { this.lastUsed = n.getObjectValue<UsageDetailsImpl>(createUsageDetailsFromDiscriminatorValue); },
            "resource": n => { this.resource = n.getObjectValue<EntityImpl>(createEntityFromDiscriminatorValue); },
            "resourceReference": n => { this.resourceReference = n.getObjectValue<ResourceReferenceImpl>(createResourceReferenceFromDiscriminatorValue); },
            "resourceVisualization": n => { this.resourceVisualization = n.getObjectValue<ResourceVisualizationImpl>(createResourceVisualizationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.lastUsed){
            writer.writeObjectValue<UsageDetailsImpl>("lastUsed", new UsageDetailsImpl(this.lastUsed));
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
        writer.writeAdditionalData(this.additionalData);
    };
}
