import {MobileAppImpl} from './index';
import {MacOSOfficeSuiteApp} from './macOSOfficeSuiteApp';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOSOfficeSuiteAppImpl extends MobileAppImpl implements MacOSOfficeSuiteApp {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /**
     * Instantiates a new MacOSOfficeSuiteApp and sets the default values.
     * @param macOSOfficeSuiteAppParameterValue 
     */
    public constructor(macOSOfficeSuiteAppParameterValue?: MacOSOfficeSuiteApp | undefined) {
        super(macOSOfficeSuiteAppParameterValue);
        this.additionalData = macOSOfficeSuiteAppParameterValue?.additionalData ? macOSOfficeSuiteAppParameterValue?.additionalData! : {};
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
