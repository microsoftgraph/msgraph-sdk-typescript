import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TabUpdatedEventMessageDetail} from './tabUpdatedEventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TabUpdatedEventMessageDetailImpl extends EventMessageDetailImpl implements TabUpdatedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** Unique identifier of the tab. */
    public tabId?: string | undefined;
    /**
     * Instantiates a new TabUpdatedEventMessageDetail and sets the default values.
     * @param tabUpdatedEventMessageDetailParameterValue 
     */
    public constructor(tabUpdatedEventMessageDetailParameterValue?: TabUpdatedEventMessageDetail | undefined) {
        super(tabUpdatedEventMessageDetailParameterValue);
        this.additionalData = tabUpdatedEventMessageDetailParameterValue?.additionalData ? tabUpdatedEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = tabUpdatedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? tabUpdatedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(tabUpdatedEventMessageDetailParameterValue?.initiator);
        this.tabId = tabUpdatedEventMessageDetailParameterValue?.tabId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "tabId": n => { this.tabId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.initiator){
            writer.writeObjectValue<IdentitySetImpl>("initiator", new IdentitySetImpl(this.initiator));
        }
        if(this.tabId){
            writer.writeStringValue("tabId", this.tabId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
