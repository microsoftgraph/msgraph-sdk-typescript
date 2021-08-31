import {AgreementFileLocalization} from '../../agreementFileLocalization';
import {AgreementFileProperties} from '../../agreementFileProperties';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class File extends AgreementFileProperties implements Parsable {
    private _localizations?: AgreementFileLocalization[] | undefined;
    /**
     * Instantiates a new File and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the localizations property value. 
     * @returns a agreementFileLocalization
     */
    public get localizations() {
        return this._localizations;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["localizations", (o, n) => { (o as unknown as File).localizations = n.getCollectionOfObjectValues<AgreementFileLocalization>(AgreementFileLocalization); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AgreementFileLocalization>("localizations", this.localizations);
    };
    /**
     * Sets the localizations property value. 
     * @param value Value to set for the localizations property.
     */
    public set localizations(value: AgreementFileLocalization[] | undefined) {
        this._localizations = value;
    };
}
