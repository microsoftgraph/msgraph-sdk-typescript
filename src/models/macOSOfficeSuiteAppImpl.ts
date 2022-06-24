import {MobileAppImpl} from './index';
import {MacOSOfficeSuiteApp} from './macOSOfficeSuiteApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MacOSOfficeSuiteAppImpl extends MobileAppImpl implements MacOSOfficeSuiteApp {
    /**
     * Instantiates a new MacOSOfficeSuiteApp and sets the default values.
     * @param macOSOfficeSuiteAppParameterValue 
     */
    public constructor(macOSOfficeSuiteAppParameterValue?: MacOSOfficeSuiteApp | undefined) {
        super(macOSOfficeSuiteAppParameterValue);
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
    };
}
