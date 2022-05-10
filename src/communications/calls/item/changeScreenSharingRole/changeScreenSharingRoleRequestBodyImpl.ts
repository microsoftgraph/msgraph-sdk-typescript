import {ScreenSharingRole} from '../../../../models/screenSharingRole';
import {ChangeScreenSharingRoleRequestBody} from './changeScreenSharingRoleRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the changeScreenSharingRole method.  */
export class ChangeScreenSharingRoleRequestBodyImpl implements AdditionalDataHolder, ChangeScreenSharingRoleRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The role property  */
    role?: ScreenSharingRole | undefined;
    /**
     * Instantiates a new changeScreenSharingRoleRequestBody and sets the default values.
     * @param changeScreenSharingRoleRequestBodyParameterValue 
     */
    public constructor(changeScreenSharingRoleRequestBodyParameterValue?: ChangeScreenSharingRoleRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = changeScreenSharingRoleRequestBodyParameterValue?.additionalData ? {} : changeScreenSharingRoleRequestBodyParameterValue?.additionalData!
        this.role = changeScreenSharingRoleRequestBodyParameterValue?.role ;
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
        if(this.role)
        writer.writeEnumValue<ScreenSharingRole>("role", this.role);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
