import {AgreementFileVersion} from './agreementFileVersion';
import {AgreementFilePropertiesImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreement entities. */
export class AgreementFileVersionImpl extends AgreementFilePropertiesImpl implements AgreementFileVersion {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new agreementFileVersion and sets the default values.
     * @param agreementFileVersionParameterValue 
     */
    public constructor(agreementFileVersionParameterValue?: AgreementFileVersion | undefined) {
        super(agreementFileVersionParameterValue);
        this.additionalData = agreementFileVersionParameterValue?.additionalData ? agreementFileVersionParameterValue?.additionalData! : {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeAdditionalData(this.additionalData);
    };
}
