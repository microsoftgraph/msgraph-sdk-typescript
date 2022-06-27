import {MobileAppAssignmentSettingsImpl} from './index';
import {MicrosoftStoreForBusinessAppAssignmentSettings} from './microsoftStoreForBusinessAppAssignmentSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MicrosoftStoreForBusinessAppAssignmentSettingsImpl extends MobileAppAssignmentSettingsImpl implements MicrosoftStoreForBusinessAppAssignmentSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Whether or not to use device execution context for Microsoft Store for Business mobile app. */
    public useDeviceContext?: boolean | undefined;
    /**
     * Instantiates a new MicrosoftStoreForBusinessAppAssignmentSettings and sets the default values.
     * @param microsoftStoreForBusinessAppAssignmentSettingsParameterValue 
     */
    public constructor(microsoftStoreForBusinessAppAssignmentSettingsParameterValue?: MicrosoftStoreForBusinessAppAssignmentSettings | undefined) {
        super(microsoftStoreForBusinessAppAssignmentSettingsParameterValue);
        this.additionalData = microsoftStoreForBusinessAppAssignmentSettingsParameterValue?.additionalData ? microsoftStoreForBusinessAppAssignmentSettingsParameterValue?.additionalData! : {};
        this.useDeviceContext = microsoftStoreForBusinessAppAssignmentSettingsParameterValue?.useDeviceContext;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "useDeviceContext": n => { this.useDeviceContext = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.useDeviceContext){
            writer.writeBooleanValue("useDeviceContext", this.useDeviceContext);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
