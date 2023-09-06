import { type Entity } from './entity';
import { type PrintOperationStatus } from './printOperationStatus';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PrintOperation extends Entity, Parsable {
    /**
     * The DateTimeOffset when the operation was created. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * The status property
     */
    status?: PrintOperationStatus | undefined;
}
