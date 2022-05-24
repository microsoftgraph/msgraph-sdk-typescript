import {ScreenSharingRole} from '../../../../models/screenSharingRole';
import {ChangeScreenSharingRolePostRequestBody} from './changeScreenSharingRolePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the changeScreenSharingRole method. */
export class ChangeScreenSharingRolePostRequestBodyImpl implements AdditionalDataHolder, ChangeScreenSharingRolePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The role property */
    public role?: ScreenSharingRole | undefined;
    /**
     * Instantiates a new changeScreenSharingRolePostRequestBody and sets the default values.
     * @param changeScreenSharingRolePostRequestBodyParameterValue 
     */
    public constructor(changeScreenSharingRolePostRequestBodyParameterValue?: ChangeScreenSharingRolePostRequestBody | undefined) {
        this.additionalData = changeScreenSharingRolePostRequestBodyParameterValue?.additionalData ? changeScreenSharingRolePostRequestBodyParameterValue?.additionalData! : {}
        this.role = changeScreenSharingRolePostRequestBodyParameterValue?.role ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "role": n => { this.role = n.getEnumValue<ScreenSharingRole>(ScreenSharingRole); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.role){
        writer.writeEnumValue<ScreenSharingRole>("role", this.role);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
