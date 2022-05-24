import {AppConsentRequestScope} from './appConsentRequestScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AppConsentRequestScopeImpl implements AdditionalDataHolder, AppConsentRequestScope, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The name of the scope. */
    public displayName?: string | undefined;
    /**
     * Instantiates a new appConsentRequestScope and sets the default values.
     * @param appConsentRequestScopeParameterValue 
     */
    public constructor(appConsentRequestScopeParameterValue?: AppConsentRequestScope | undefined) {
        this.additionalData = appConsentRequestScopeParameterValue?.additionalData ? appConsentRequestScopeParameterValue?.additionalData! : {}
        this.displayName = appConsentRequestScopeParameterValue?.displayName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "displayName": n => { this.displayName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
