import {WindowsInformationProtection} from './windowsInformationProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MdmWindowsInformationProtectionPolicy extends WindowsInformationProtection implements Parsable {
    /**
     * Instantiates a new mdmWindowsInformationProtectionPolicy and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
        ]);
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
