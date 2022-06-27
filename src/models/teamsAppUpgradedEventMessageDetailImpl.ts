import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {TeamsAppUpgradedEventMessageDetail} from './teamsAppUpgradedEventMessageDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAppUpgradedEventMessageDetailImpl extends EventMessageDetailImpl implements TeamsAppUpgradedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /** Display name of the teamsApp. */
    public teamsAppDisplayName?: string | undefined;
    /** Unique identifier of the teamsApp. */
    public teamsAppId?: string | undefined;
    /**
     * Instantiates a new TeamsAppUpgradedEventMessageDetail and sets the default values.
     * @param teamsAppUpgradedEventMessageDetailParameterValue 
     */
    public constructor(teamsAppUpgradedEventMessageDetailParameterValue?: TeamsAppUpgradedEventMessageDetail | undefined) {
        super(teamsAppUpgradedEventMessageDetailParameterValue);
        this.additionalData = teamsAppUpgradedEventMessageDetailParameterValue?.additionalData ? teamsAppUpgradedEventMessageDetailParameterValue?.additionalData! : {};
        this.initiator = teamsAppUpgradedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? teamsAppUpgradedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(teamsAppUpgradedEventMessageDetailParameterValue?.initiator);
        this.teamsAppDisplayName = teamsAppUpgradedEventMessageDetailParameterValue?.teamsAppDisplayName;
        this.teamsAppId = teamsAppUpgradedEventMessageDetailParameterValue?.teamsAppId;
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
