import {AuthenticationMethodTargetType} from './authenticationMethodTargetType';
import {ExcludeTarget} from './excludeTarget';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExcludeTargetImpl implements AdditionalDataHolder, ExcludeTarget, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The object identifier of an Azure AD user or group. */
    public id?: string | undefined;
    /** The type of the authentication method target. Possible values are: user, group, unknownFutureValue. */
    public targetType?: AuthenticationMethodTargetType | undefined;
    /**
     * Instantiates a new excludeTarget and sets the default values.
     * @param excludeTargetParameterValue 
     */
    public constructor(excludeTargetParameterValue?: ExcludeTarget | undefined) {
        this.additionalData = excludeTargetParameterValue?.additionalData ? excludeTargetParameterValue?.additionalData! : {}
        this.id = excludeTargetParameterValue?.id ;
        this.targetType = excludeTargetParameterValue?.targetType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "id": n => { this.id = n.getStringValue(); },
            "targetType": n => { this.targetType = n.getEnumValue<AuthenticationMethodTargetType>(AuthenticationMethodTargetType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.targetType){
        writer.writeEnumValue<AuthenticationMethodTargetType>("targetType", this.targetType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
