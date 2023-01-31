import {Entity} from '../';
import {createEdiscoveryCaseFromDiscriminatorValue} from './createEdiscoveryCaseFromDiscriminatorValue';
import {EdiscoveryCase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CasesRoot extends Entity implements Parsable {
    private _ediscoveryCases?: EdiscoveryCase[] | undefined;
    /**
     * Instantiates a new casesRoot and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the ediscoveryCases property value. 
     * @returns a ediscoveryCase
     */
    public get ediscoveryCases() {
        return this._ediscoveryCases;
    };
    /**
     * Sets the ediscoveryCases property value. 
     * @param value Value to set for the ediscoveryCases property.
     */
    public set ediscoveryCases(value: EdiscoveryCase[] | undefined) {
        this._ediscoveryCases = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "ediscoveryCases": n => { this.ediscoveryCases = n.getCollectionOfObjectValues<EdiscoveryCase>(createEdiscoveryCaseFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<EdiscoveryCase>("ediscoveryCases", this.ediscoveryCases);
    };
}
