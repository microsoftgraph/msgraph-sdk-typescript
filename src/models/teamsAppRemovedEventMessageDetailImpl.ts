import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TeamsAppRemovedEventMessageDetail} from './teamsAppRemovedEventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAppRemovedEventMessageDetailImpl extends EventMessageDetailImpl implements TeamsAppRemovedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** Display name of the teamsApp. */
    public teamsAppDisplayName?: string | undefined;
    /** Unique identifier of the teamsApp. */
    public teamsAppId?: string | undefined;
    /**
     * Instantiates a new TeamsAppRemovedEventMessageDetail and sets the default values.
     * @param teamsAppRemovedEventMessageDetailParameterValue 
     */
    public constructor(teamsAppRemovedEventMessageDetailParameterValue?: TeamsAppRemovedEventMessageDetail | undefined) {
        super(teamsAppRemovedEventMessageDetailParameterValue);
        this.additionalData = teamsAppRemovedEventMessageDetailParameterValue?.additionalData ? teamsAppRemovedEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = teamsAppRemovedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? teamsAppRemovedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(teamsAppRemovedEventMessageDetailParameterValue?.initiator);
        this.teamsAppDisplayName = teamsAppRemovedEventMessageDetailParameterValue?.teamsAppDisplayName;
        this.teamsAppId = teamsAppRemovedEventMessageDetailParameterValue?.teamsAppId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "teamsAppDisplayName": n => { this.teamsAppDisplayName = n.getStringValue(); },
            "teamsAppId": n => { this.teamsAppId = n.getStringValue(); },
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
        if(this.teamsAppDisplayName){
            writer.writeStringValue("teamsAppDisplayName", this.teamsAppDisplayName);
        }
        if(this.teamsAppId){
            writer.writeStringValue("teamsAppId", this.teamsAppId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
